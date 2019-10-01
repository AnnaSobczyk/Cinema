const user = require('./user');
const movie = require('./movie');

module.exports = (router) => {
    user(router);
    movie(router);
    return router;
};
