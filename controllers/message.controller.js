// Imports message.model
const Message = require('../models/message.model');

// Exports the message_create method for index.js. Creates the message and saves it to the database
exports.message_create = function (req, res) {
    let message = new Message(
        {
            id:  req.body.id,
            timestamp: req.body.timestamp,
            content: req.body.content
        }
    );

    message.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('Message Created successfully')
    })
};

// Message Read function exported to index.js
exports.message_details = function (req, res) {
    Message.findById(req.params.id, function (err, message) {
        if (err) return next(err);
        res.send(message);
    })
};

// Message Update function exported to index.js
exports.message_update = function (req, res) {
    Message.findByIdAndUpdate(req.params.id, {$set: req.body}, 
    function (err, message) {
        if (err) return next(err);
        res.send('Message updated.');
    });
};

// Message Delete function exported to index.js
exports.message_delete = function (req, res) {
    Message.findByIdAndDelete(req.params.id, function (err, message) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};