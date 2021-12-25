import { FirestoreDb } from "../../db";

export default class UserCollection<T> extends  FirestoreDb<T> {
    constructor() {
        super('user')
    }

    async addShop(ownerId: string, shopId: string) {
        const shops = this.makeArrayUnion(shopId)
        return this.update(ownerId, { shops })
    }
}