const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScreeningSchema = new Schema({
    details: {
        screening_room: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'ScreeningRoom'
        },
        reserved_seats: [{
            row: {
                type: Number,
                required: true
            },
            column: {
                type: Number,
                required: true
            }
        }],
    },
    date: {
        type: Date,
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Movie'
    }
});

module.exports = mongoose.model('Screening', ScreeningSchema);
