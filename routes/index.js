require('dotenv').config();
var express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const joi = require("../middleware/joi");
const { resetPasswordSchema } = require("../joi/authSchemas");
const { sendSMSVerification } = require('../lib/SMS');
const fs = require('fs');
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
router.get('/file/:file_name', (req, res) => {
    fs.readFile('public/' + req.params.file_name, (err, data) => {
        if (err) {
            res.status(404).send("File not found")
        } else {
            res.send(data)
        }
    })
});
router.post('/file/:file_name', (req, res) => {
    let json = req.body.json;  
    fs.writeFile('public/' + req.params.file_name, json, (err) => {
        if (err) {
            res.status(500).send("Error writing file")
        } else {
            res.send("File written")
        }
    })
});
router.get('/reset-password/:token', AuthController.passwordResetForm);
router.post('/reset-password/:token', joi(resetPasswordSchema), AuthController.passwordReset);
router.get('/test/sms', async (req, res) => { 
    try {
        //await sendSMSVerification("040975210", "123456")
        res.send("SMS sent")
    } catch (error) {
        res.status(500).send("Error sending SMS")
    }
    
});
module.exports = router;
