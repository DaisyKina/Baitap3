const express = require ('express')
const app = express()
const users = require('./data/users.json')
const rootRouter = require('./router/router')
const port = 3000

app.use(express.json())

app.use(rootRouter)

app.get('/users', (req,res) => res.send ({ users }))


app.listen (port, () => {
    console.log(`A string that you might want port http://localhost:${port}`)
})