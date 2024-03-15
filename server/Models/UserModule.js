const mongoose = require('mongoose');

const UserModuleSchema = new mongoose.Schema({
     
    name: {
        type: String,
        required: true,
    },

});

const UserModule = mongoose.model('UserModule', UserModuleSchema)

module.exports = UserModule