const Joi = require('joi');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const registerSchema = Joi.object().keys({
    name: Joi.string().alphanum().trim().min(2).max(30).required(),
    surname: Joi.string().alphanum().trim().min(2).max(30).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
    reservations: Joi.array()
});

const loginSchema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
});

exports.register = async (req, res) => {
    const result = Joi.validate(req.body, registerSchema)
    if (result.error) return res.status(400).json({ error: result.error.details[0].message });

    const { name, surname, email, password } = req.body;
    const user = new User({ name, surname, email, password });

    user.save((error, user) => {
        if (error) return res.status(500).send(error);
        res.status(201).send(user);
    });
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const result = Joi.validate(req.body, loginSchema)
    if (result.error) return res.status(400).json({ error: result.error.details[0].message });

    try {
        User.findOne({ email }, (err, user) => {
            if (user) {
                user.validatePassword(password).then(match => {
                    if (match) {
                        const { email, name, surname } = user;
                        const token = jwt.sign({ _id: user._id }, "jwtPrivateKey");
                        res.status(200).send({ email, name, surname, token });
                    } else {
                        res.status(401).send({ error: 'Invalid email or password' })
                    }
                });
            } else {
                res.status(401).send({ error: 'Invalid email or password' });
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
