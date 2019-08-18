// Imports message and thread models
const Message = require('../models/message.model');
const Thread = require('../models/thread.model')

// Exports the message_create method for index.js. Creates the message and saves it to the database
exports.message_create = function (req, res) {
    let message = new Message(
        {
            timestamp: req.body.timestamp,
            content: req.body.content
        }
    );

    message.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('Message Sent to ' + req.body.threadid)
    }).then(() => {
        Thread.findOne({ _id: req.body.threadid }, (err, thread) => {
            if (thread) {
                // The below two line will add the newly saved message to the Thread's array field
                thread.messages.push(message);
                thread.save();
                res.json({ message: 'Message created and added to thread!' });
            }
        });
    })
    .catch((error) => {
        res.status(500).json({error});
    });

    res.send();
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