
import express from 'express'
import makeExpressAppAdapter from './express-app.adapter'


const router = express.Router()

const expressAppAdapter = makeExpressAppAdapter(router)

export {

    expressAppAdapter
}