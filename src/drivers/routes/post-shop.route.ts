import { postShopController } from "../../controllers"
import ExpressRouterAdapter from "../adapters/express-router.adapter"

export default router => {
    router.post('/shop', ExpressRouterAdapter.adapt(postShopController))
}
