import { Role } from ".";

export default interface IOwner {
    id?: string
    avatar: string
    name: string
    phoneNumber: string
    email: string,
    role: Role,
    shops: string[]
}