const express = require('express');
const router = express.Router();
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect, admin } = require('../middleware/auth');

//Whereever we use protect funtion(written in middleware) it checks weather the given user is LoggedIn or Not

// EVENT - 5 Functions
// Routes -> Middleware -> Models -> Controllers

// Get All Events
router.get('/', getEvents);

// Create Event by ID
router.get('/:id', getEventById);

// Create Event (Admin Only)
router.post('/', protect, admin, createEvent);

// Update Event (Admin Only)
router.put('/:id', protect, admin, updateEvent);

// Delete Event (Admin Only)
router.delete('/:id', protect, admin, deleteEvent);

module.exports = router;
