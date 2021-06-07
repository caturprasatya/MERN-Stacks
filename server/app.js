const express = require('express')

const route = require('./routes/')

const app = express()
const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(route)


app.listen(port, () => console.log('app listen in port : ', port))