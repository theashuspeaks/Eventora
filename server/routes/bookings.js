const express = require('express');
const router = express.Router();
const { bookEvent, confirmBooking, getMyBookings, cancelBooking, sendBookingOTP } = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/auth');


//BOOKING - 5 FUNCTIONS

//Send OTP (protected, also OTP Verification)
router.post('/send-otp', protect, sendBookingOTP);

//Book Event (protected)
router.post('/', protect, bookEvent);

//Confirm Booking (protected & confirmed by admin)
router.put('/:id/confirm', protect, admin, confirmBooking);

//Get all Bookings (protected)
router.get('/my', protect, getMyBookings);

//Cancel Booking (protected)
router.delete('/:id', protect, cancelBooking);

module.exports = router;
