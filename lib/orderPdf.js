import fs from 'fs';
import path from 'path';

import signPdf from '@signpdf/signpdf';
import { plainAddPlaceholder } from '@signpdf/placeholder-plain';
import wkhtmltopdf from 'wkhtmltopdf';
import pug from 'pug';
import pdfLib from 'pdf-lib';
import dotenv from 'dotenv';
import { P12Signer } from '@signpdf/signer-p12';

import wkhtmltopdfPath from './wkhtmltopdf-path.js';
import { getPDFCertificate } from './certificate.js';
import prisma from '../prisma/prisma.js';

const { PDFDocument } = pdfLib;
dotenv.config();
wkhtmltopdf.command = wkhtmltopdfPath; // your path setup
async function generatePDFFromPug(templateName, locals = {}) {
	const viewsPath = path.join(process.cwd(), 'views');
	const templatePath = path.join(viewsPath, templateName);
	if (!fs.existsSync(templatePath)) {
		throw new Error(`Pug template not found: ${templatePath}`);
	}
	const html = pug.renderFile(templatePath, locals);
	const pdfBuffer = await generatePDF(html);
	const signedBuffer = await signPdfBuffer(pdfBuffer);
	fs.writeFileSync(path.join(process.cwd(), 'signed.pdf'), signedBuffer);
	return signedBuffer;
}
function generatePDF(htmlContent) {
	return new Promise((resolve, reject) => {
		wkhtmltopdf(
			htmlContent,
			{
				pageSize: 'A4',
				enableLocalFileAccess: true, // IMPORTANT for assets or inline fonts
				printMediaType: true, // Use @media print CSS
				disableSmartShrinking: true, // Prevent layout collapse
				dpi: 300, // Improve text rendering
				noOutline: true, // Avoid outline issues
				marginTop: '20mm',
				marginBottom: '10mm',
				marginLeft: '10mm',
				marginRight: '10mm',
			},
			(err, stream) => {
				if (err) return reject(err);
				const chunks = [];
				stream.on('data', (chunk) => chunks.push(chunk));
				stream.on('end', () => resolve(Buffer.concat(chunks)));
				stream.on('error', reject);
			}
		);
	});
}
async function signPdfBuffer(pdfBuffer) {
	const p12Buffer = await getPDFCertificate();

	const password = process.env.PDF_SIGN_CERT_PASS || 'defaultpassword';
	const signer = new P12Signer(p12Buffer, {
		passphrase: password,
	});
	// 🔧 Fix PDF structure using pdf-lib
	const loadedPdf = await PDFDocument.load(pdfBuffer);
	const outputPdfBuffer = Buffer.from(pdfBuffer);
	const pdfWithPlaceholder = plainAddPlaceholder({
		pdfBuffer: outputPdfBuffer, // Use the cleaned PDF
		reason: 'Signed digitally',
		location: 'Online',
	});
	return await signPdf.sign(pdfWithPlaceholder, signer);
}
async function getOrderAndPDF(order_id) {
	let orders = await prisma.delivery_orders.findMany({
		where: {
			order_id,
		},
		include: {
			user: true,
			business: true,
		},
	});
	if (orders.length === 0) {
		console.log('No orders found.');
		return;
	}
	let order = orders[0];
	let pdf = await generatePDFFromPug('pdf/orderConfirmation.pug', { order });
	return pdf;
}
export { generatePDFFromPug };
export { generatePDF };
export { signPdfBuffer };
export { getOrderAndPDF };
export default {
	generatePDFFromPug,
	generatePDF,
	signPdfBuffer,
	getOrderAndPDF,
};
