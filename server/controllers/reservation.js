const Joi = require('joi');
const Reservation = require('../models/reservation');

const reserveSchema = Joi.object().keys({
    user: Joi.string().trim().required(),
    seats: Joi.array().items({
        row: Joi.number().required(),
        column: Joi.number().required()
    }),
    date: Joi.date().required(),
    screening: Joi.string().trim().required()
});

const getSchema = Joi.object().keys({
    user: Joi.string().trim().required()
});

exports.getAllForUser = async (req, res) => {
    const user = req.params.user;

    const result = Joi.validate({ user }, getSchema)
    if (result.error) return res.status(400).json({ error: result.error.details[0].message });

    Reservation.find({ user }, (err, reservations) => {
        res.send(reservations);
    });
}

exports.reserve = async (req, res) => {
    const result = Joi.validate(req.body, reserveSchema)
    if (result.error) return res.status(400).json({ error: result.error.details[0].message });

    const { user, seats, date, screening } = req.body;
    const reservation = new Reservation({ user, seats, date, screening }); // TODO - change the seat to the not available status

    reservation.save((error, reservation) => {
        if (error) return res.status(500).send(error);
        res.status(201).send(reservation);
    });
}
