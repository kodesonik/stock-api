import { Request, Response} from 'express'


export default class ExpressRouterAdapter {
  static adapt (controller, responseFormat?: string) {
    return async (req: Request, res: Response) => {
      const httpRequest = {
        body: req.body,
        params: req.params,
      }
      const httpResponse = await controller(httpRequest)
      if (responseFormat) {
        res.type(responseFormat)
        res.status(httpResponse.statusCode).send(httpResponse.body)
      } else {
        res.status(httpResponse.statusCode).json(httpResponse.body)
      }
    }
  }
}
