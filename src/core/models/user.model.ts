import { Role } from "."

export default abstract class User {
   protected _id: string
   protected _avatar: string
   protected _name: string
   protected _phoneNumber: string
   protected _role: Role
 

    constructor(
        id: string,
        avatar: string,
        name: string,
        phoneNumber: string
    ) {
        this._id = id
        this._avatar = avatar
        this._name = name
        this._phoneNumber = phoneNumber
    }

    get id() {
        return this._id
    }

    set id(value: string) {
        this._id = value
    }
    
    get avatar() {
        return this._avatar
    }

    get name() {
        return this._name
    }

    get phoneNumber() {
        return this._phoneNumber
    }

    get role() {
        return this._role
    }

}