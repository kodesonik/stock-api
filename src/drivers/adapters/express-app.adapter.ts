import { Router } from "express"


export default function makeExpressAppAdapter (
    router: Router
) {
    return function expressAppAdapter(app: any, routes: any[]) {
        app.use('/api', router)
        routes.forEach(route => route(router))
    }

}
