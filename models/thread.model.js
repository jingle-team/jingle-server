const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates the schema for threads
let ThreadSchema = new Schema({
    name: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});


// Exports the thread model
module.exports = mongoose.model('Thread', ThreadSchema);