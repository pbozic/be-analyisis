import crypto from 'crypto';

export type RsaSha256SignFn = (data: Uint8Array) => Promise<Uint8Array>;

/** Concatenate invoice fields per FURS ZOI rule (ASCII) */
export const zoiConcat = (p: {
	TaxNumber: string; // "12345678"
	IssueDateTimeLocal: string; // "dd.MM.yyyy HH:mm:ss"
	InvoiceNumber: string; // e.g. "12345"
	BusinessPremiseID: string; // <=20
	ElectronicDeviceID: string; // <=20
	InvoiceAmount: string; // decimal string e.g. "12.34" (dot)
}) =>
	p.TaxNumber + p.IssueDateTimeLocal + p.InvoiceNumber + p.BusinessPremiseID + p.ElectronicDeviceID + p.InvoiceAmount;

/** Compute ZOI hex = MD5(RSA-SHA256(concat)) */
export const computeZoiHex = async (concatStr: string, signFn: RsaSha256SignFn): Promise<string> => {
	const sig = await signFn(new TextEncoder().encode(concatStr));
	return crypto.createHash('md5').update(Buffer.from(sig)).digest('hex');
};

/** Convert ZOI hex -> decimal string for QR (bigint) */
export const zoiHexToDecimal = (hex: string): string => {
	const bi = BigInt('0x' + hex);
	return bi.toString(10);
};

/** Build 60-digit QR payload: ZOI_decimal(39) + TaxNumber(8) + YYMMDDHHMMSS(12) + controlDigit(1) */
export const buildQr60Payload = (params: {
	zoiHex: string;
	taxNumber: string; // 8 digits
	issueDate: Date; // use local invoice issue datetime
}) => {
	const zoiDec = zoiHexToDecimal(params.zoiHex).padStart(39, '0');
	const two = (n: number) => n.toString().padStart(2, '0');
	const d = params.issueDate;
	const YY = two(d.getFullYear() % 100);
	const MM = two(d.getMonth() + 1);
	const DD = two(d.getDate());
	const hh = two(d.getHours());
	const mm = two(d.getMinutes());
	const ss = two(d.getSeconds());
	const ts = `${YY}${MM}${DD}${hh}${mm}${ss}`; // 12
	const base = `${zoiDec}${params.taxNumber}${ts}`;
	// control digit = mod 10 (simple checksum)
	const control = (base.split('').reduce((acc, ch) => acc + (ch.charCodeAt(0) - 48), 0) % 10).toString();
	return base + control; // 60 digits
};
