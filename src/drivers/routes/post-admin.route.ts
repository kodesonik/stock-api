import { postAdminController } from "../../controllers"
import ExpressRouterAdapter from "../adapters/express-router.adapter"

export default router => {
    router.get('/', () => { console.log('hello word') })
    router.post('/admin', ExpressRouterAdapter.adapt(postAdminController))
}
