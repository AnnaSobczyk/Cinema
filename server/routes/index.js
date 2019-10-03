const user = require('./user');
const movie = require('./movie');
const screening = require('./screening');

module.exports = (router) => {
    screening(router);
    user(router);
    movie(router);
    return router;
};
