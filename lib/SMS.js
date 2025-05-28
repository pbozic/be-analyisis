import axios from 'axios';
import { config } from 'dotenv';
import { getCountryCallingCode, formatNumber } from 'libphonenumber-js';
import { parsePhoneNumber } from 'libphonenumber-js';
config();
const sendSMSVerification = async (to, token, countryCode = null) => {
	try {
		let parsedPhoneNumber = await getParsedPhoneNumber(to);
		console.log(parsedPhoneNumber);
		let params = {
			un: process.env.SMS_API_USERNAME,
			ps: process.env.SMS_API_PASSWORD,
			to: parsedPhoneNumber.number,
			from: process.env.SMS_API_NUMBER,
			// sid: 1,
			// sname: "Klikni",
			cc: parsedPhoneNumber.countryCallingCode,
			m: 'Your Klikni verification code is ' + token + '.',
		};
		let paramString = new URLSearchParams(params).toString();
		let url = `https://www.smsapi.si/poslji-sms?${paramString}`;
		let resp = await axios.get(url);
		console.log(resp.data);
		return resp;
	} catch (error) {
		throw new Error(error);
	}
};
const sendSMSPasswordReset = async (to, text, countryCode = 386) => {
	let params = {
		un: process.env.SMS_API_USERNAME,
		ps: process.env.SMS_API_PASSWORD,
		to: to,
		from: process.env.SMS_API_NUMBER,
		// sid: 1,
		// sname: "Klikni",
		cc: countryCode, //TODO: get country code from phone number
		m: text,
	};
	let paramString = new URLSearchParams(params).toString();
	let url = `https://www.smsapi.si/poslji-sms?${paramString}`;
	try {
		let resp = await axios.get(url);
		console.log(resp.data);
		return resp;
	} catch (error) {
		throw new Error(error);
	}
};
const sendSMS = async (to, message) => {
	try {
		return client.messages.create({
			body: message,
			from: process.env.TWILIO_PHONE_NUMBER,
			to: to,
		});
	} catch (error) {
		return new Error(error);
	}
};
async function getParsedPhoneNumber(phoneNumber, countryCode = null) {
	console.log('Sending SMS to: ', phoneNumber, countryCode);
	const parsedNumber = parsePhoneNumber(phoneNumber, countryCode || null);
	console.log(parsedNumber);
	if (!parsedNumber) {
		throw new Error('Invalid phone number');
	}
	const nationalNumber = parsedNumber.formatNational();
	// Remove spaces to get a clean number
	const cleanNumber = nationalNumber.replace(/\s+/g, '');
	console.log(cleanNumber);
	return { number: cleanNumber, countryCallingCode: parsedNumber.countryCallingCode };
}
export { sendSMSVerification };
export { sendSMS };
export { sendSMSPasswordReset };
export { getParsedPhoneNumber };
export default {
	sendSMSVerification,
	sendSMS,
	sendSMSPasswordReset,
	getParsedPhoneNumber,
};
