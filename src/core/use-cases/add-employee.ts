import FirebaseAuthentification from "../../helpers/utils/firebase-authentication"
import UserCollection from "../data/user.collection"
import { Employee, IEmployee } from "../models"

export default function makeAddAddEmployee(
    adminCollection: UserCollection<IEmployee>,
    firebaseAuthentification: FirebaseAuthentification
) {
    return async function addAdmin(data: IEmployee) {
        if (!data) throw new Error('')
        const employee = new Employee(data.id, data.avatar, data.name, data.phoneNumber, data.role, data.shopId)
        
        const authRes = await firebaseAuthentification.signup({
            photoURL: employee.avatar,
            displayName: employee.name,
            emailVerified: true,
            phoneNumber: employee.phoneNumber,
            disabled: false
        })
        employee.id = authRes.uid

        return adminCollection.set(employee.id, {
            name: employee.name,
            avatar: employee.avatar,
            phoneNumber: employee.phoneNumber,
            role: employee.role,
            shopId: employee.shopId
        })
    }
}