var express = require('express');

const router = express.Router();
const UserController = require('../../../controllers/UserController');
const joi = require('../../../middleware/joi');

router.get('/', UserController.listUsers);

module.exports = router;
