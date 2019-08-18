const express = require('express');
const router = express.Router();

// Variable used to import message.controller.js
const message_controller = require('../controllers/message.controller');

// Route for Read
router.get('/:id', message_controller.message_details);
// Route to create a new Message
router.post('/create', message_controller.message_create);
// Router to update a message
router.put('/:id/update', message_controller.message_update);
// Route for Delete
router.delete('/:id/delete', message_controller.message_delete);

module.exports = router;