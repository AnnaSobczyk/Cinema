const movie = require('./movie');
const reservation = require('./reservation');
const screening = require('./screening');
const screeningRoom = require('./screening-room');
const user = require('./user');

module.exports = (router) => {
    movie(router);
    reservation(router);
    screening(router);
    screeningRoom(router)
    user(router);
    return router;
};
