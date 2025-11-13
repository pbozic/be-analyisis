import path from 'path';
import url from 'node:url';

import nodemailer from 'nodemailer';
import pug from 'pug';
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
/**
 * Sends an email rendered from a Pug template.
 * @param {string} subject - Email subject line.
 * @param {string} template - Template name (without extension) in views/emails.
 * @param {string} recipient - Destination email address.
 * @param {object} data - Data object passed to the Pug template.
 * @param {object|object[]} [attachements] - Optional attachment or array of attachments.
 * @returns {void}
 */
function sendEmailTemplate(subject, template, recipient, data, attachements) {
	// console.info("Sending email with info: ", subject, template, recipient, data);
	const compiledFunction = pug.compileFile(path.join(__dirname, '../views/emails/' + template + '.pug'));
	const content = compiledFunction(data);
	sendEmail(subject, content, recipient, false, attachements);
}
/**
 * Sends an HTML email to a single recipient (optionally cc-ing an admin).
 * @param {string} subject - Email subject.
 * @param {string} content - HTML body content.
 * @param {string} recipient - Recipient email address.
 * @param {boolean} [broadcastToAdminEmails=false] - If true, also sends to admin email.
 * @param {object|object[]} [attachements] - Optional attachment(s).
 * @returns {void}
 */
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
/**
 * Sends a plain text email to multiple recipients.
 * @param {string} subject - Email subject.
 * @param {string} content - Text body content.
 * @param {string[]} recipients - List of recipient email addresses.
 * @returns {void}
 */
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
