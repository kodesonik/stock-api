import { auth } from "firebase-admin";
import { FirebaseAuthentification } from "../../helpers/utils"
import { ShopCollection, UserCollection } from "../data"
import { IAdmin, IEmployee, IOwner } from "../models"
import makeAddAdmin from "./add-admin"
import makeAddAddEmployee from "./add-employee"
import makeAddShop from "./add-shop"

const adminCollection = new UserCollection<IAdmin>()
const employeeCollection = new UserCollection<IEmployee>()
const ownerCollection = new UserCollection<IOwner>()
const shopCollection = new ShopCollection()
const firebaseAuthentification = new FirebaseAuthentification(auth)

const addAdmin = makeAddAdmin(adminCollection, firebaseAuthentification)
const addEmployee = makeAddAddEmployee(employeeCollection, firebaseAuthentification)
const addShop = makeAddShop(shopCollection, ownerCollection, firebaseAuthentification)


export {
    addAdmin,
    addEmployee,
    addShop
}