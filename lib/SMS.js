const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const sendSMSVerification = async (to, token) => {
    try {
        return client.messages.create({
            body: `Your phone verification code is ${token}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: to
        });
    } catch (error) {
        return new Error(error);
    }
}
const sendSMS = async (to, message) => {
    try {
        return client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: to
        });
    } catch (error) {
        return new Error(error);
    }
}

module.exports = {
    sendSMSVerification,
    sendSMS
}