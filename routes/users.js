var express = require('express');
var router = express.Router();
var user = require('../controller/UsersController.js');

router.post('/', user.create);
router.get('/', user.read);
router.put('/:id', user.update);
router.delete('/:id', user.delete_user)

module.exports = router;
