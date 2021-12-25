import express from 'express'
import setupApp from './setup'
// import setUpView from './views'

const app = express()
setupApp(app)
// setUpView(app)

export default app
