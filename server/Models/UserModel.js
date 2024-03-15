const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     
    fio: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    pass:{
        type: String,
        require: true,
    }

});

const UserModule = mongoose.model('User', UserSchema)

module.exports = UserModule