const nodemailer = require('nodemailer');
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
    // logger: true, // Enable logging
    // debug: true   // Enable debug mode
});

console.log("NODEMAILER:", transporter)
function sendEmailTemplate(subject, template, recipient, data) {
    const compiledFunction = pug.compileFile(path.join(__dirname, "../views/emails/" + template + ".pug"));
    const content = compiledFunction(data);
    sendEmail(subject, content, recipient, false);
}

function sendEmail(subject, content, recipient, broadcastToAdminEmails) {
    transporter.sendMail({
        subject: subject,
        html: content,
        disableUrlAccess: false,
        //to: recipient,
        to: broadcastToAdminEmails ? [
            process.env.EMAIL_ADMIN,
            recipient
        ] : [recipient],
        from: process.env.EMAIL_USERNAME,
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
        from: process.env.EMAIL_USERNAME,
    }).then(console.log).catch(console.error);
}

module.exports = {
    sendEmail,
    sendEmailToRecipients,
    sendEmailTemplate
}