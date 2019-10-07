const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    timeAgo: {
        type: Date,
        required: true
    },
    avatar:{
        type: Number
    },
    content:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
