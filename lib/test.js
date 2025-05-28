import { sendSMSVerification } from './SMS.js';
const sendSMS = async () => {
	try {
		return sendSMSVerification('+380931981775', 'bla');
	} catch (error) {
		return new Error(error);
	}
};
sendSMS();
