require('dotenv').config()

const mongoose = require('mongoose')
const DB_URL = process.env.DB_CONNECT

module.exports = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log('db is connected')
    } catch (error) {
        console.log(error)
    }
}
