const controller = require('../controllers/screening-room');

module.exports = (router) => {
    router.route('/screening-rooms')
        .get(controller.getAll);
    
    router.route('/screening-rooms/:id')
        .get(controller.getById);
};
