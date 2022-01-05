export default class FirebaseAuthentification {
     auth
    constructor(auth: unknown) {
        this.auth = auth
    }

    signup(data) {
        console.log(data)
        return this.auth().createUser(data)
    }
}