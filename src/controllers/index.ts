import { addAdmin } from "../core/use-cases"
import makePostAdminController from "./post-admin.controller"

const postAdminController = makePostAdminController(addAdmin)

export {
    postAdminController
}