export default function makePostShopController(
    addShop
) {
    return async function postShopController(httpRequest) {
        try {
            return addShop(httpRequest.body.shop, httpRequest.body.owner)
        } catch (err) {
            console.log(err.message)
            return { statusCode: 500, body: { message: err.message}}
        }
    }
}