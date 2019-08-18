const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates the schema for messages
let MessageSchema = new Schema({
     id:  Number,
     timestamp: Date,
     content: String
});


// Exports the message model
module.exports = mongoose.model('Message', MessageSchema);