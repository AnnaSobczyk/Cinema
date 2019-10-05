const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    seats: [{
        row: {
            type: Number,
            required: true
        },
        column: {
            type: Number,
            required: true
        }
    }],
    screening: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Screening' 
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
