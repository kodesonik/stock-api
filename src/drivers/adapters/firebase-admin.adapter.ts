
export default function makeFirebaseAdminAdapter(admin){
    return async function firebaseAdminAdapter() {
        const serviceAccount = require("path/to/serviceAccountKey.json");
        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
        });
    }
}

