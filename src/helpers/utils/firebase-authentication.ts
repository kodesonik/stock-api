export default class FirebaseAuthentification {
     auth
    constructor(auth: unknown) {
        this.auth = auth
    }

    signup(data) {
        return this.auth().createUser(data)
    }
}