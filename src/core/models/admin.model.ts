import { IAdmin, Role, User } from "."

export default class Admin extends User implements IAdmin {
    private _email: string

    constructor(
        id: string,
        avatar: string,
        name: string,
        phoneNumber: string,
        email: string
    ) {
        super(id, avatar, name, phoneNumber)
        super._role = Role.ADMIN
        this._email = email
    }

    get email() {
        return this._email
    }

    

}