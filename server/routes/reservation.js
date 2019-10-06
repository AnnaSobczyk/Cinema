const controller = require('../controllers/reservation');

module.exports = (router) => {
    router.route('/reservations')
        .post(controller.reserve);

    router.route('/reservations/:user')
        .get(controller.getAllForUser)
};
