const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeatSchema = new Schema({
    row_number: {
        type: Number,
        required: true
    },
    seat_number: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    screening_room: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Seat' 
    }
});

module.exports = mongoose.model('Seat', SeatSchema);
