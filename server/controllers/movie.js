const Joi = require('joi');
const fetch = require("node-fetch");
const Movie = require('../models/movie');
const Screening = require('../models/screening');

const schema = Joi.object().keys({
    movie_id: Joi.string().alphanum().required()
});

exports.getAll = async (req, res) => {
    Movie.find({}, (err, movies) => {
        res.send(movies);
    });
}

exports.getById = async (req, res) => {
    const movie_id = req.params.id;

    const result = Joi.validate({ movie_id }, schema)
    if (result.error) return res.status(400).json({ error: result.error.details[0].message });

    try {
        const movie = await Movie.findOne({ movie_id });
        if (movie) {
            const movie_details = await getMovieScreeningsAndDetails(movie.movie_id);
            res.status(200).send(movie_details);
        } else {
            res.status(401).send({ error: 'Invalid movie id' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getMovieDetails = async (movie_id) => {
    const response = await fetch(`${process.env.OMDB_API_URL}/?i=${movie_id}&apikey=${process.env.OMDB_API_KEY}`);
    let data = await response.json();
    return data;
}

const getMovieScreeningsAndDetails = async (movie_id) => {
    const response = await getMovieDetails(movie_id);

    return Movie.aggregate([{
        $match : { movie_id : movie_id }
    },{
        $lookup: {
            from: Screening.collection.name,
            localField: "_id",
            foreignField: "movie",
            as: "screenings"
        }
    },{
        $addFields: { "info": response }
    }]).exec().then(items => items[0]);
}
