const wkhtmltopdf = require('wkhtmltopdf');
const path = require('path');
// This is where wkhtmltopdf will end up

const pug = require('pug');
const fs = require('fs');
const wkhtmltopdfPath = require('./wkhtmltopdf-path');
console.log('wkhtmltopdfPath', wkhtmltopdfPath);
wkhtmltopdf.command = wkhtmltopdfPath;
async function generatePDFFromPug(templateName, locals = {}) {
    const viewsPath = path.join(process.cwd(), 'views'); // root/views
    const templatePath = path.join(viewsPath, templateName);
  
    if (!fs.existsSync(templatePath)) {
      throw new Error(`Pug template not found: ${templatePath}`);
    }
  
    const html = pug.renderFile(templatePath, locals);
    return await generatePDF(html);
}

async function generatePDF(htmlContent) {
    return new Promise((resolve, reject) => {
        wkhtmltopdf(htmlContent, { pageSize: 'A4', output: '-' }, (err, stream) => {
        if (err) {
            reject(err);
        } else {
            const chunks = [];
            stream.on('data', (chunk) => {
            chunks.push(chunk);
            });
            stream.on('end', () => {
            const pdfBuffer = Buffer.concat(chunks);
            resolve(pdfBuffer);
            });
            stream.on('error', (error) => {
            reject(error);
            });
        }
        });
    });
}

let order = {
    orderNumber: '1747064785642',
    orderId: '68220d9ab037c94b59824ac7',
    customer: 'Primož Božič',
    venue: 'SPAR Pečnik',
    orderType: 'Delivery',
    deliveryTime: '12.05.2025 17:46',
    paymentMethod: 'Apple Pay',
    total: 25.40,
    items: [
      {
        name: 'Masleno listnatno testo, SPAR Premium (280 g)',
        vat: '9.5%',
        quantity: 1,
        unitPrice: 2.29,
        total: 2.29,
      },
      {
        name: 'Priboljšek za mačke Piščanec in riž, Purina One (800 g)',
        vat: '9.5%',
        quantity: 2,
        unitPrice: 5.99,
        total: 11.98,
      },
      {
        name: 'Mokra hrana za mačke Perutninski izbor, Whiskas (4x85 g)',
        vat: '9.5%',
        quantity: 4,
        unitPrice: 2.48,
        total: 9.92,
      },
      {
        name: 'Delivery',
        vat: '9.5%',
        quantity: 1,
        unitPrice: 0.0,
        total: 0.0,
      },
      {
        name: 'Service fee',
        vat: '9.5%',
        quantity: 1,
        unitPrice: 1.21,
        total: 1.21,
      },
    ],
  }
  

generatePDFFromPug('pdf/orderConfirmation.pug', order)
    .then((pdfBuffer) => {
        fs.writeFileSync('output.pdf', pdfBuffer);
        console.log('PDF generated successfully!');
    })
    .catch((error) => {
        console.error('Error generating PDF:', error);
    });

module.exports = generatePDF;