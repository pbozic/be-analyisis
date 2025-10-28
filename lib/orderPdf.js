import signPdfNode from '@signpdf/signpdf';
import pdfLib from 'pdf-lib';
import dotenv from 'dotenv';

const signPdf = signPdfNode.default || signPdfNode; // Handle both default and named export
const { PDFDocument } = pdfLib;
dotenv.config();
//wkhtmltopdf.command = wkhtmltopdfPath; // your path setup
async function generatePDFFromPug(templateName, locals = {}) {
	return;
}
function generatePDF(htmlContent) {
	return;
}
async function signPdfBuffer(pdfBuffer) {
	return;
}
async function getOrderAndPDF(order_id) {
	return;
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
