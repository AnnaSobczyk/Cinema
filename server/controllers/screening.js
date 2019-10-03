const Joi = require('joi');
const Screening = require('../models/screening');

const schema = Joi.object().keys({
    _id: Joi.string().alphanum().optional(),
    movie: Joi.string().alphanum().required()
});

exports.getAll = (req, res) => {
    Screening.find({}, (err, screenings) => {
        res.send(screenings);
    });
}

exports.getByMovieAndId = (req, res) => {
    const _id = req.params.id;
    const movie = req.params.movie;

    const result = Joi.validate({ _id, movie }, schema)
    if (result.error) return res.status(400).json({ error: result.error.details[0].message });

    let query = { movie };
    if (_id) query._id = _id;

    Screening.find(query, (err, screenings) => {
        res.send(screenings);
    });
}
