const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    seat: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Seat' 
    },
    date: {
        type: Date,
        required: true
    },
    screening: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Screening' 
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
