const controller = require('../controllers/screening');

module.exports = (router) => {
    router.route('/screenings')
        .get(controller.getAll);
    
    router.route('/screenings/:movie/:id?')
        .get(controller.getByMovieAndId);
};
