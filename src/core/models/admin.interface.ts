import { Role } from "."

export default interface IAdmin {
    id?: string
    avatar: string
    name: string
    phoneNumber: string
    email: string,
    role: Role
}