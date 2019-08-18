const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for users
let UserSchema = new Schema({
     id:  Number,
     profilePicture: String,
     name:   String,
     friends: [],
     servers: [],
     password: String
});


// Export the model
module.exports = mongoose.model('User', UserSchema);