export default function makePostAdminController(
    addAdmin:any
) {
    return async function postAdminController(httpRequest) {
        try {
            return addAdmin(httpRequest.data)
        } catch (err) {
            console.log(err.message)
        }
    }
}