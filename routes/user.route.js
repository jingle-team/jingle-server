const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');

// Route for Read
router.get('/:id', user_controller.user_details);
// Route to create a new User
router.post('/create', user_controller.user_create);
// Router to update a user
router.put('/:id/update', user_controller.user_update);
// Route for Delete
router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;