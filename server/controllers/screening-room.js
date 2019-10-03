const Joi = require('joi');
const ScreeningRoom = require('../models/screening-room');

const schema = Joi.object().keys({
    _id: Joi.string().alphanum().required()
});

exports.getAll = (req, res) => {
    ScreeningRoom.find({}, (err, screeningRooms) => {
        res.send(screeningRooms);
    });
}

exports.getById = (req, res) => {
    const _id = req.params.id;

    const result = Joi.validate({ _id }, schema)
    if (result.error) return res.status(400).json({ error: result.error.details[0].message });

    ScreeningRoom.find({ _id }, (err, screeningRoom) => {
        res.send(screeningRoom);
    });
}
