import * as admin from 'firebase-admin'
import express from 'express'
import makeFirebaseAdminAdapter from './firebase-admin.adapter'
import makeExpressAppAdapter from './express-app.adapter'


const router = express.Router()

const firebaseAdminAddpater = makeFirebaseAdminAdapter(admin)
const expressAppAdapter = makeExpressAppAdapter(router)

export {
    firebaseAdminAddpater,
    expressAppAdapter
}