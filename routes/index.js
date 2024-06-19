require('dotenv').config();
var express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const joi = require("../middleware/joi");
const { resetPasswordSchema } = require("../joi/authSchemas");
const { sendSMSVerification } = require('../lib/SMS');
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
router.get('/test/sms', async (req, res) => { 
    try {
        //await sendSMSVerification("040975210", "123456")
        res.send("SMS sent")
    } catch (error) {
        res.status(500).send("Error sending SMS")
    }
    
});
module.exports = router;
