const express = require('express');
const http = require('http')
const mongoose = require('mongoose')
const cors = require('cors')
const mongoConnect = require('./db/mongoConnect')
const bodyParser = require('body-parser');
const router = require('./routes/indexRouter')
const cookieParser = require('cookie-parser');
require('dotenv').config()
const PORT = process.env.PORT

const app = express()
const server = http.createServer(app)



app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors({
    exposedHeaders: 'Authorization',
    origin: process.env.CORS_URL
}))

app.use(cookieParser('apteka-secret-qweewq'))

app.use(router)

mongoConnect()

server.listen(PORT, () => {
    console.log(`server stared on port ${PORT}`)
})