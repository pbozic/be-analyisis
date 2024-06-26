const nodemailer = require('nodemailer');
const {PRIORITY_ADMIN_EMAILS} = require("./enums");
const {PRINT_EMAIL_RECIPIENTS} = require("./enums");
const pug = require('pug');
const path = require('path');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_SMTP_PORT,
    secure: false, // Set secure to false for STARTTLS
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});
console.log("NODEMAILER", {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_SMTP_PORT,
    secure: false, // Set secure to false for STARTTLS
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
})
function sendEmailTemplate(subject, template, recipient, broadcastToAdminEmails, data) { 
    const compiledFunction = pug.compileFile(path.join(__dirname, "../views/emails/" + template + ".pug"));
    const content = compiledFunction(data);
    sendEmail(subject, content, recipient, broadcastToAdminEmails);

}

function sendEmail(subject, content, recipient, broadcastToAdminEmails) {

    transporter.sendMail({
        subject: subject,
        html: content,
        disableUrlAccess: false,
        //to: recipient,
        to: broadcastToAdminEmails ? [
            ...PRIORITY_ADMIN_EMAILS,
            recipient
        ] : [recipient],
        from: PRINT_EMAIL_RECIPIENTS.ADMIN_SENDER,
    }).then(console.log).catch(console.error);
}

function sendEmailToRecipients(subject, content, recipients) {
    transporter.sendMail({
        subject: subject,
        text: content,
        //to: recipient,
        to: [
            ...recipients,
        ],
        from: PRINT_EMAIL_RECIPIENTS.ADMIN_SENDER,
    }).then(console.log).catch(console.error);
}

module.exports = {
    sendEmail,
    sendEmailToRecipients,
    sendEmailTemplate
}