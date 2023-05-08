const usersRouter = require('./usersRouter')
const rootRouter = require('express').Router()

rootRouter.use('/user', usersRouter)
rootRouter.use(require('../Middleware/formatData.js'))
rootRouter.use(require('../Middleware/formatError'))

module.exports = rootRouter
