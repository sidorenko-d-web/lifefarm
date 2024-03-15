const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/lifefarm'

module.exports = async () => {
    try {
        mongoose.connect(DB_URL)
        console.log('db is connected')
    } catch (error) {
        console.log(error)
    }
}
