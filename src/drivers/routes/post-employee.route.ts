import { postEmployeeController } from "../../controllers"
import ExpressRouterAdapter from "../adapters/express-router.adapter"

export default router => {
    router.post('/employee', ExpressRouterAdapter.adapt(postEmployeeController))
}
