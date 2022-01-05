import { Role } from "."
import User from './user.model'

export default class Employee extends User {
    private _shopId: string

    constructor(
        id: string,
        avatar: string,
        name: string,
        phoneNumber: string,
        role: Role,
        shopId: string
    ) {
        if(role === Role.ADMIN || role === Role.SUPER || role === Role.OWNER) throw Error('Unauthorized operation')
        super(id, avatar, name, phoneNumber)
        super._role = role?role:Role.SELLER
        this._shopId = shopId
    }

    get shopId() {
        return this._shopId
    }

}