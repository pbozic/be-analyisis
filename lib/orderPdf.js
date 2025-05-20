const { plainAddPlaceholder } = require('node-signpdf');
const signer = require('node-signpdf').default;

const fs = require('fs');
const path = require('path');

const wkhtmltopdf = require('wkhtmltopdf');
const pug = require('pug');
const { PDFDocument } = require('pdf-lib');
const dotenv = require('dotenv');

const { getPDFCertificate } = require('./certificate');
const prisma = require('../prisma/prisma');
dotenv.config();
wkhtmltopdf.command = require('./wkhtmltopdf-path'); // your path setup

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

	// 🔧 Fix PDF structure using pdf-lib
	const loadedPdf = await PDFDocument.load(pdfBuffer);
	const outputPdfBuffer = Buffer.from(pdfBuffer);

	const pdfWithPlaceholder = plainAddPlaceholder({
		pdfBuffer: outputPdfBuffer, // Use the cleaned PDF
		reason: 'Signed digitally',
		location: 'Online',
		signatureLength: 8192,
	});

	return signer.sign(pdfWithPlaceholder, p12Buffer, {
		passphrase: password,
	});
}
async function getOrderAndPDF() {
	let orders = await prisma.delivery_orders.findMany({
		where: {
			status: 'ORDER_FINISHED_SUCCESS',
		},
		include: {
			user: true,
			business: true,
		},
	});
	if (orders.length === 0) {
		console.log('No completed orders found.');
		return;
	}

	let order = orders[0];
	generatePDFFromPug('pdf/orderConfirmation.pug', { order });
}
getOrderAndPDF();

module.exports = generatePDFFromPug;
