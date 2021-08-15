// User List model which expose the schema of user with it's respective fields

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    UserId: Number,
    userName: String,
    userEmail: String,
    city: String,
    preferredHelper: Array
}, {
    timeStamps: true
});

module.exports = mongoose.model('UserList', UserSchema);