export default function makePostEmployeeController(
    addEmployee
) {
    return async function postEmployeeController(httpRequest) {
        try {
            return addEmployee(httpRequest.body)
        } catch (err) {
            console.log(err.message)
            return { statusCode: 500, body: { message: err.message}}
        }
    }
}