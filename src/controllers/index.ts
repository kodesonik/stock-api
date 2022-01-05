import { addAdmin, addEmployee, addShop } from "../core/use-cases"
import makePostAdminController from "./post-admin.controller"
import makePostEmployeeController from "./post-employee.controller"
import makePostShopController from "./post-shop.controller"

const postAdminController = makePostAdminController(addAdmin)
const postShopController = makePostShopController(addShop)
const postEmployeeController = makePostEmployeeController(addEmployee)

export {
    postAdminController,
    postShopController,
    postEmployeeController
}