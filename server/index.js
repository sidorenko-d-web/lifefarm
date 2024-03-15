const express = require('express');
const PORT = 8080
const http = require('http')
const mongoose = require('mongoose')
const cors = require('cors')
const mongoConnect = require('./db/mongoConnect')
const bodyParser = require('body-parser');

const app = express()
const server = http.createServer(app)



app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors({
    origin: '*'
}))

app.use(require('./routes/ItemRouter'))
app.use(require('./routes/UserRouter'))

mongoConnect()

server.listen(PORT, () => {
    console.log(`server stared on port ${PORT}`)
})