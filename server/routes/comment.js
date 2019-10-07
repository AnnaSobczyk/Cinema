const controller = require('../controllers/comment');

module.exports = router => {
    router.route('/comments').get(controller.getAll)
    router.route('/comments').post(controller.addComment)
}