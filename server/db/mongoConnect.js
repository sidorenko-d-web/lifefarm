const mongoose = require('mongoose')
const DB_URL = 'mongodb+srv://dimon1200:aPRbjiIj1sqeLiI8@lifefarmcluster.lczx24g.mongodb.net/lifefarm'

module.exports = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log('db is connected')
    } catch (error) {
        console.log(error)
    }
}
