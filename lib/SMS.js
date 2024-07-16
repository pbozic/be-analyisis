const axios = require('axios');
require('dotenv').config();

const sendSMSVerification = async (to, token, countryCode = 386) => {
    let params = {
        un: process.env.SMS_API_USERNAME,
        ps: process.env.SMS_API_PASSWORD,
        to: to,
        from: process.env.SMS_API_NUMBER,
        // sid: 1,
        // sname: "Klikni",
        cc: countryCode, //TODO: get country code from phone number
        m: "Your Klikni verification code is " + token + "."
    }
    let paramString = new URLSearchParams(params).toString();
    let url = `https://www.smsapi.si/poslji-sms?${paramString}`;
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
        return resp
    } catch (error) {
        throw new Error(error);
    }

}
const sendSMSPasswordReset = async (to, text, countryCode = 386) => {
    let params = {
        un: process.env.SMS_API_USERNAME,
        ps: process.env.SMS_API_PASSWORD,
        to: to,
        from: process.env.SMS_API_NUMBER,
        // sid: 1,
        // sname: "Klikni",
        cc: countryCode, //TODO: get country code from phone number
        m: text
    }
    let paramString = new URLSearchParams(params).toString();
    let url = `https://www.smsapi.si/poslji-sms?${paramString}`;
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
        return resp
    } catch (error) {
        throw new Error(error);
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
    sendSMS,
    sendSMSPasswordReset
}