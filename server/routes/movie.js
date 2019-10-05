const controller = require('../controllers/movie');

module.exports = (router) => {
    router.route('/movies')
        .get(controller.getAll);
        
    router.route('/movies/:id')
        .get(controller.getById);
};
