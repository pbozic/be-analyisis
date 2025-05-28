import fs from 'fs';
import path from 'path';

import * as forge from 'node-forge';
import dotenv from 'dotenv';
dotenv.config();
function generateSelfSignedP12(commonName = 'PDF SIGN CERT') {
	const pki = forge.pki;
	const password = process.env.PDF_SIGN_CERT_PASS || 'defaultpassword';
	// Generate key pair
	const keys = pki.rsa.generateKeyPair(2048);
	const cert = pki.createCertificate();
	cert.publicKey = keys.publicKey;
	cert.serialNumber = '01';
	cert.validity.notBefore = new Date();
	cert.validity.notAfter = new Date();
	cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);
	const attrs = [{ name: 'commonName', value: commonName }];
	cert.setSubject(attrs);
	cert.setIssuer(attrs);
	// Self-sign certificate
	cert.sign(keys.privateKey, forge.md.sha256.create());
	// Export to PKCS#12 (.p12)
	const p12Asn1 = forge.pkcs12.toPkcs12Asn1(keys.privateKey, cert, password, { algorithm: '3des' });
	const p12Der = forge.asn1.toDer(p12Asn1).getBytes(); // binary DER string
	const p12Buffer = Buffer.from(p12Der, 'binary'); // ⬅️ correct buffer conversion
	return p12Buffer;
}
async function getPDFCertificate() {
	const certPath = path.resolve(process.cwd(), 'certificate.p12');
	const password = process.env.PDF_SIGN_CERT_PASS || 'defaultpassword';
	let p12Buffer;
	if (!fs.existsSync(certPath)) {
		p12Buffer = generateSelfSignedP12();
		fs.writeFileSync(certPath, p12Buffer); // save raw buffer
	} else {
		p12Buffer = fs.readFileSync(certPath); // read as buffer
	}
	if (!Buffer.isBuffer(p12Buffer)) {
		throw new Error('Certificate is not a valid Buffer');
	}
	return p12Buffer;
}
export { getPDFCertificate };
export default {
	getPDFCertificate,
};
