const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    
    Username: {
        type: String
    },
    Password: {
        type: String
    },
    Email: {
        type: String
    }
}, {collection: "Admin_Login"});

module.exports = mongoose.model("Admin", adminSchema);