// Imports user.model
const User = require('../models/user.model');



// Exports the user_create method for index.js. Creates the user and saves it to the database
exports.user_create = function (req, res) {
    let user = new User(
        {
            id:  req.body.id,
            profilePicture: req.body.profilePicture,
            name:   req.body.name,
            friends: [],
            servers: [],
            password: req.body.password
        }
    );

    user.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('User Created successfully')
    })
};

// Read function exported to index.js
exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

// Update function exported to index.js
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, 
    function (err, user) {
        if (err) return next(err);
        res.send('User updated.');
    });
};

// Delete function exported to index.js
exports.user_delete = function (req, res) {
    User.findByIdAndDelete(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};