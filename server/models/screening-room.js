const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScreeningRoomSchema = new Schema({
    seats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat',
        required: true
    }]
});

module.exports = mongoose.model('ScreeningRoom', ScreeningRoomSchema);
