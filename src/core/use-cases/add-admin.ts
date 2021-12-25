import FirebaseAuthentification from "../../helpers/utils/firebase-authentication";
import { UserCollection } from "../data";
import { Admin, IAdmin } from "../models";

export default function makeAddAdmin(
    adminCollection: UserCollection<IAdmin>,
    firebaseAuthentification: FirebaseAuthentification
) {
    return async function addAdmin(data: IAdmin) {
        if (!data) throw new Error('')
        const admin = new Admin(data.id, data.avatar, data.name, data.phoneNumber, data.email)
        
        const authRes = await firebaseAuthentification.signup({
            photoURL: admin.avatar,
            displayName: admin.name,
            email: admin.email,
            password: 'password',
            emailVerified: true,
            phoneNumber: admin.phoneNumber,
            disabled: false
        })
        admin.id = authRes.uid

        return adminCollection.set(admin.id, {
            name: admin.name,
            avatar: admin.avatar,
            phoneNumber: admin.phoneNumber,
            email: admin.email
        })
    }
}