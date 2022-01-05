import { IOwner, Role } from "."
import User from './user.model'

export default class Owner extends User implements IOwner {
    private _email: string
    private _shops: string[]

    constructor(
        id: string,
        avatar: string,
        name: string,
        phoneNumber: string,
        email: string,
        shops: string[] = []
    ) {
        super(id, avatar, name, phoneNumber)
        super._role = Role.OWNER
        this._email = email
        this._shops = shops
    }

    get email() {
        return this._email
    }

    get shops() {
        return this._shops
    }
  
    

}