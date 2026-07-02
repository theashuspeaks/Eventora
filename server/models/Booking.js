const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },

    //Status
    status: { type: String, enum: ['confirmed', 'cancelled', 'pending'], default: 'pending' },

    //Payment, You can Add Payment Gateway Here
    paymentStatus: { type: String, enum: ['paid', 'not_paid'], default: 'not_paid' },

    amount: { type: Number, required: true },

    bookedAt: { type: Date, default: Date.now }

}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
