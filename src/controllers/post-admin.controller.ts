export default function makePostAdminController(
    addAdmin
) {
    return async function postAdminController(httpRequest) {
        try {
            return addAdmin(httpRequest.body)
        } catch (err) {
            console.log(err.message)
            return { statusCode: 500, body: { message: err.message}}
        }
    }
}