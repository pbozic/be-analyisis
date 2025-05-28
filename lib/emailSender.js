import path from 'path';
import url from 'node:url';

import * as nodemailer from 'nodemailer';
import * as pug from 'pug';
import { config } from 'dotenv';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config();
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
// console.log("NODEMAILER:", transporter)
function sendEmailTemplate(subject, template, recipient, data, attachements) {
	// console.info("Sending email with info: ", subject, template, recipient, data);
	const compiledFunction = pug.compileFile(path.join(__dirname, '../views/emails/' + template + '.pug'));
	const content = compiledFunction(data);
	sendEmail(subject, content, recipient, false, attachements);
}
function sendEmail(subject, content, recipient, broadcastToAdminEmails, attachements) {
	const mailOptions = {
		subject: subject,
		html: content,
		disableUrlAccess: false,
		//to: recipient,
		to: broadcastToAdminEmails ? [process.env.EMAIL_ADMIN, recipient] : [recipient],
		from: process.env.EMAIL_USERNAME,
	};
	if (attachements) {
		if (!Array.isArray(attachements)) {
			attachements = [attachements];
		}
		mailOptions.attachments = [];
		attachements.forEach((attachment) => {
			mailOptions.attachments.push({
				filename: attachment.filename,
				content: attachment.content,
				contentType: attachment.contentType,
			});
		});
	}
	transporter.sendMail(mailOptions).then(console.log).catch(console.error);
}
function sendEmailToRecipients(subject, content, recipients) {
	transporter
		.sendMail({
			subject: subject,
			text: content,
			//to: recipient,
			to: [...recipients],
			from: process.env.EMAIL_USERNAME,
		})
		.then(console.log)
		.catch(console.error);
}
export { sendEmail };
export { sendEmailToRecipients };
export { sendEmailTemplate };
export default {
	sendEmail,
	sendEmailToRecipients,
	sendEmailTemplate,
};
