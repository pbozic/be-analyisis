import fs from 'fs';
import { Buffer } from 'node:buffer';
import path from 'path';

import { plainAddPlaceholder } from '@signpdf/placeholder-plain';
import { P12Signer } from '@signpdf/signer-p12';
import signPdfNode from '@signpdf/signpdf';
import pdfLib from 'pdf-lib';
import dotenv from 'dotenv';
import pug from 'pug';
import wkhtmltopdf from 'wkhtmltopdf';
import wkhtmltopdfPath from 'wkhtmltopdf-installer/lib/wkhtmltopdf-path.js';

import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import { getPDFCertificate } from './certificates.js';

const signPdf = signPdfNode.default || signPdfNode; // Handle both default and named export
const { PDFDocument } = pdfLib;
dotenv.config();
wkhtmltopdf.command = wkhtmltopdfPath; // your path setup
/**
 * Render a Pug template into a signed PDF Buffer.
 * @param {string} templateName - Relative path under `views/` to the Pug template (e.g., "pdf/orderConfirmation.pug").
 * @param {object} [locals={}] - Template locals passed to the Pug renderer.
 * @returns {Promise<Buffer>} Resolves with a signed PDF buffer.
 */
async function generatePDFFromPug(templateName, locals = {}) {
	const viewsPath = path.join(process.cwd(), 'views');
	const templatePath = path.join(viewsPath, templateName);
	if (!fs.existsSync(templatePath)) {
		throw new Error(`Pug template not found: ${templatePath}`);
	}
	const html = pug.renderFile(templatePath, locals);
	const pdfBuffer = await generatePDF(html);
	const signedBuffer = await signPdfBuffer(pdfBuffer);
	//fs.writeFileSync(path.join(process.cwd(), 'signed.pdf'), signedBuffer);
	return signedBuffer;
}
/**
 * Convert HTML content to a PDF Buffer using wkhtmltopdf.
 * @param {string} htmlContent - Full HTML markup to render.
 * @returns {Promise<Buffer>} Resolves with the raw PDF buffer.
 */
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
/**
 * Apply a digital signature to a PDF buffer using a P12 certificate.
 * @param {Buffer} pdfBuffer - Unsigned PDF buffer.
 * @returns {Promise<Buffer>} Resolves with the signed PDF buffer.
 */
async function signPdfBuffer(pdfBuffer) {
	const p12Buffer = await getPDFCertificate();
	const password = process.env.PDF_SIGN_CERT_PASS || 'defaultpassword';
	const signer = new P12Signer(p12Buffer, {
		passphrase: password,
	});
	// 🔧 Fix PDF structure using pdf-lib (load to normalize structure)
	await PDFDocument.load(pdfBuffer);
	const outputPdfBuffer = Buffer.from(pdfBuffer);
	const pdfWithPlaceholder = plainAddPlaceholder({
		pdfBuffer: outputPdfBuffer, // Use the cleaned PDF
		reason: 'Signed digitally',
		location: 'Online',
	});
	return await signPdf.sign(pdfWithPlaceholder, signer);
}
/**
 * Fetch a delivery order and generate a signed PDF confirmation for it.
 * @param {string} order_id - The order ID to fetch and render.
 * @returns {Promise<Buffer|undefined>} Resolves with the signed PDF buffer or undefined if no order found.
 */
async function getOrderAndPDF(order_id) {
	let order = await DeliveryOrderDao.getOrder(order_id);
	if (!order) {
		console.log('No orders found.');
		return;
	}
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
