const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    surname: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        match: /\S+@\S+\.\S+/
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    }]
});

userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR));
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

module.exports = mongoose.model('User', userSchema);
