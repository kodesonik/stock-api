import { firestore } from "firebase-admin"


export default class FirestoreDb<T> {
    private _collection: firestore.CollectionReference

    constructor(name: string) {
        this._collection = this.makeCollection(name)
    }


    async get(conditions?): Promise<T[]> {
       const collection = this.makeRequestWithConditions(conditions)
       const docs = await collection.get()
       const result = []
       docs.forEach( doc => result.push({ id: doc.id, ...doc.data() as T}))
       return result
    }

    async getById(id: string): Promise<T> {
        const doc = await this._collection.doc(id).get()
        return { id: doc.id, ...doc.data() as T }
    }

    async add(data: T): Promise<{ id: string }> {
        const res =  await this._collection.add({...data, deletedAt: null})
        return { id: res.id }
    }

    async update(id: string, data: T | unknown) {
       return this._collection.doc(id).update(data)
    }

    async set(id: string, data: T) {
        return this._collection.doc(id).set({...data, deletedAt: null})
    }

    async remove(id: string) {
        return this._collection.doc(id).delete()
    }

    async makeArrayUnion(item) {
        return firestore.FieldValue.arrayUnion(item)
    }

    private makeCollection(val: string) {
        return firestore().collection(val)
    }

    private makeRequestWithConditions(conditions) {
        if (conditions.where && conditions.limit && conditions.orderBy) {
            return this._collection.where(conditions.where.params, conditions.where.operator, conditions.where.value).limit(conditions.limit).orderBy(conditions.orderBy)
        }
        if (conditions.where && conditions.limit) {
            return this._collection.where(conditions.where.params, conditions.where.operator, conditions.where.value).limit(conditions.limit)
        }
        if (conditions.where) {
            return this._collection.where(conditions.where.params, conditions.where.operator, conditions.where.value)
        }
        return this._collection
    }
}