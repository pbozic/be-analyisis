import axios from 'axios';
import { config } from 'dotenv';
import { parsePhoneNumber } from 'libphonenumber-js';
config();
/**
 * Send an SMS verification message using smsapi.si and a token.
 * @param {string} to - E.164 phone number or raw input to parse.
 * @param {string|number} token - Verification code to include in the message body.
 * @param {string|null} [countryCode=null] - Optional ISO country code for parsing (e.g., 'SI').
 * @returns {Promise<object>} Axios response from the provider.
 */
const sendSMSVerification = async (to, token, countryCode = null) => {
	try {
		let parsedPhoneNumber = await getParsedPhoneNumber(to, countryCode);
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
		let paramString = new globalThis.URLSearchParams(params).toString();
		let url = `https://www.smsapi.si/poslji-sms?${paramString}`;
		let resp = await axios.get(url);
		console.log(resp.data);
		return resp;
	} catch (error) {
		throw new Error(error);
	}
};
/**
 * Send a password reset SMS message using smsapi.si.
 * @param {string} to - Destination phone number (national or E.164 as supported by provider).
 * @param {string} text - Message text to send.
 * @param {number} [countryCode=386] - Calling code to use for the SMS provider (default Slovenia).
 * @returns {Promise<object>} Axios response from the provider.
 */
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
	let paramString = new globalThis.URLSearchParams(params).toString();
	let url = `https://www.smsapi.si/poslji-sms?${paramString}`;
	try {
		let resp = await axios.get(url);
		console.log(resp.data);
		return resp;
	} catch (error) {
		throw new Error(error);
	}
};
/**
 * Send an arbitrary SMS using a configured client (e.g., Twilio).
 * Note: Requires a globally available `client` with a `messages.create` API.
 * @param {string} to - E.164 destination number.
 * @param {string} message - SMS message body.
 * @returns {Promise<object|Error>} Provider response or Error instance.
 */
const sendSMS = async (to, message) => {
	try {
		// eslint-disable-next-line no-undef
		return client.messages.create({
			body: message,
			from: process.env.TWILIO_PHONE_NUMBER,
			to: to,
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Parse a raw phone string into a clean national number and calling code info.
 * @param {string} phoneNumber - Phone number string to parse.
 * @param {string|null} [countryCode=null] - Optional ISO country code for parsing (e.g., 'SI').
 * @returns {Promise<{number:string,countryCallingCode:string}>} Clean national number and calling code.
 */
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
