const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    movie_id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Movie', MovieSchema);
