var express = require('express');
const router = express.Router();

const joi = require('../../middleware/joi');
const AdminUserRoutes = require('./admin/users');
const AdminBusinessRoutes = require('./admin/business');

router.use('/users', AdminUserRoutes);
router.use('/business', AdminBusinessRoutes);

module.exports = router;
