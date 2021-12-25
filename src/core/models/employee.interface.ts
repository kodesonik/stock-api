import { Role } from ".";

export default interface IEmployee {
    id?: string
    avatar: string,
    name: string,
    phoneNumber: string,
    role: Role,
}