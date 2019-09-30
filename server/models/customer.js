const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const CustomerSchema = new Schema({
    name: {
        type: String,
        trim: true,  
        required: true,
        minlength: 2
        },
    surname: {
        type: String,
        trim: true,  
        required: true,
        minlength: 2
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

UserSchema.pre('save', async function(next){
    var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Customer', CustomerSchema);
