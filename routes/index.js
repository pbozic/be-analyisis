require('dotenv').config();
var express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const joi = require("../middleware/joi");
const { resetPasswordSchema } = require("../joi/authSchemas");
router.get('/emails/:template', (req, res) => {
    res.render(
        'emails/' + req.params.template,
        {
            name: 'John Doe',
            title: '123456',
            resetLink: process.env.LINK_BASE_URL + '/reset-password/123456'

        }
    )
})
router.get('/reset-password/:token', AuthController.passwordResetForm);
router.post('/reset-password/:token', joi(resetPasswordSchema), AuthController.passowrdReset);

module.exports = router;
