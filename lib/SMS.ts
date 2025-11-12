import process from 'node:process';

import axios, { AxiosResponse } from 'axios';
import { config } from 'dotenv';
import { parsePhoneNumberWithError } from 'libphonenumber-js';

config();

type ParsedPhone = { number: string; countryCallingCode: string };

const sendSMSVerification = async (
	to: string,
	token: string | number,
	countryCode: string | null = null
): Promise<AxiosResponse<string>> => {
	try {
		const parsedPhoneNumber = await getParsedPhoneNumber(to, countryCode);
		const params = {
			un: process.env.SMS_API_USERNAME,
			ps: process.env.SMS_API_PASSWORD,
			to: parsedPhoneNumber.number,
			from: process.env.SMS_API_NUMBER,
			cc: parsedPhoneNumber.countryCallingCode,
			m: `Your Klikni verification code is ${token}.`,
		};
		const paramString = new globalThis.URLSearchParams(params as any).toString();
		const url = `https://www.smsapi.si/poslji-sms?${paramString}`;
		const resp = await axios.get<string>(url);
		return resp;
	} catch (error: any) {
		throw new Error(error);
	}
};

const sendSMSPasswordReset = async (
	to: string,
	text: string,
	countryCode: number = 386
): Promise<AxiosResponse<string>> => {
	const params = {
		un: process.env.SMS_API_USERNAME,
		ps: process.env.SMS_API_PASSWORD,
		to,
		from: process.env.SMS_API_NUMBER,
		cc: countryCode,
		m: text,
	};
	const paramString = new globalThis.URLSearchParams(params as any).toString();
	const url = `https://www.smsapi.si/poslji-sms?${paramString}`;
	const resp = await axios.get<string>(url);
	return resp;
};

const sendSMS = async (): Promise<never> => {
	throw new Error('Direct SMS client not configured in this environment');
};

async function getParsedPhoneNumber(phoneNumber: string, countryCode: string | null = null): Promise<ParsedPhone> {
	const parsedNumber = parsePhoneNumberWithError(phoneNumber, (countryCode ?? undefined) as any);
	if (!parsedNumber) throw new Error('Invalid phone number');
	const nationalNumber = parsedNumber.formatNational();
	const cleanNumber = nationalNumber.replace(/\s+/g, '');
	return { number: cleanNumber, countryCallingCode: parsedNumber.countryCallingCode };
}

export { sendSMSVerification, sendSMS, sendSMSPasswordReset, getParsedPhoneNumber };
export default { sendSMSVerification, sendSMS, sendSMSPasswordReset, getParsedPhoneNumber };
