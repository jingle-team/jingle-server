// Imports message and thread models
const Message = require('../models/message.model');
const Thread = require('../models/thread.model')

// Exports the thread_create method for index.js. Creates the thread and saves it to the database
exports.thread_create = function (req, res) {
    let thread = new Thread(
        {
            name: req.body.name,
        }
    )
    .catch((error) => {
        res.status(500).json({error});
    });

    res.send();
};

// Thread message retrieval function exported to index.js
exports.thread_messages = (req, res) => {
    Thread.findOne({_id: req.params.id})
        .populate('messages')
        .find({"_id": { "$nin": seenIds }}) // Finds only messages that haven't been seen by the user before
        .sort('_id') // Sorts by latest messages first
        .limit(30) // Filters only to the last 30 results
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({error});
        });
    res.send();
};
