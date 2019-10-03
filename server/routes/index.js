const movie = require('./movie');
const screening = require('./screening');
const user = require('./user');

module.exports = (router) => {
    movie(router);
    screening(router);
    user(router);
    return router;
};
