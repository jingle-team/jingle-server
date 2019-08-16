const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller message');
};

exports.user_create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};