// This file is used to configure the OneSignal SDK with the userKey and appKey tokens.
const { Client } = require('@onesignal/node-onesignal');
require('dotenv').config();

const client = new Client({
  app: { appAuthKey: process.env.ONESIGNAL_API_KEY, appId: process.env.ONESIGNAL_APP_ID }
});

const sendNotification = async (message, userIds) => {
    try {
      const notification = {
        contents: { en: message },
        include_player_ids: userIds
      };
  
      const response = await client.notifications.create(notification);
  
      console.log('Notification sent:', response);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
};
  
module.exports = {
    sendNotification
};