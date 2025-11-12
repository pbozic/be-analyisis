import path from 'node:path';
import url from 'node:url';

import nodemailer from 'nodemailer';
import pug from 'pug';
import { config } from 'dotenv';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();

type Attachment = {
	filename: string;
	content: string | Buffer;
	contentType?: string;
};

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_SMTP_PORT ? Number(process.env.EMAIL_SMTP_PORT) : undefined,
	secure: false,
	auth: {
		user: process.env.EMAIL_USERNAME,
		pass: process.env.EMAIL_PASSWORD,
	},
});
/**
 * Sends an email rendered from a Pug template.
 * @param {string} subject - Email subject line.
 * @param {string} template - Template name (without extension) in views/emails.
 * @param {string} recipient - Destination email address.
 * @param {object} data - Data object passed to the Pug template.
 * @param {object|object[]} [attachements] - Optional attachment or array of attachments.
 * @returns {void}
 */
function sendEmailTemplate(
	subject: string,
	template: string,
	recipient: string,
	data: Record<string, unknown>,
	attachements?: Attachment | Attachment[]
): void {
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
function sendEmail(
	subject: string,
	content: string,
	recipient: string,
	broadcastToAdminEmails: boolean = false,
	attachements?: Attachment | Attachment[]
): void {
	const mailOptions: {
		subject: string;
		html: string;
		to: string[];
		from?: string;
		disableUrlAccess: boolean;
		attachments?: Attachment[];
	} = {
		subject: subject,
		html: content,
		disableUrlAccess: false,
		to: broadcastToAdminEmails && process.env.EMAIL_ADMIN ? [process.env.EMAIL_ADMIN, recipient] : [recipient],
		from: process.env.EMAIL_USERNAME,
	};

	if (attachements) {
		const list = Array.isArray(attachements) ? attachements : [attachements];
		mailOptions.attachments = list.map((attachment) => ({
			filename: attachment.filename,
			content: attachment.content,
			contentType: attachment.contentType,
		}));
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
function sendEmailToRecipients(subject: string, content: string, recipients: string[]): void {
	transporter
		.sendMail({
			subject: subject,
			text: content,
			to: [...recipients],
			from: process.env.EMAIL_USERNAME,
		})
		.then(console.log)
		.catch(console.error);
}

export { sendEmail, sendEmailToRecipients, sendEmailTemplate };
export default {
	sendEmail,
	sendEmailToRecipients,
	sendEmailTemplate,
};
