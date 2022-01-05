import { Router } from "express"


export default function makeExpressAppAdapter (
    router: Router
) {
    return function expressAppAdapter(app, routes) {
        app.use('/api', router)
        routes.forEach(route => route(router))

    }

}
