const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScreeningSchema = new Schema({
    screening_room: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ScreeningRoom'
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
