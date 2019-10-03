const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScreeningRoomSchema = new Schema({
    rows: {
        type: Number,
        required: true
    },
    columns: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('ScreeningRoom', ScreeningRoomSchema);
