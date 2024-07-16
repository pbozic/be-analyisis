// This file is used to configure the OneSignal SDK with the userKey and appKey tokens.
const OneSignal = require('@onesignal/node-onesignal');
require('dotenv').config();

const configuration = OneSignal.createConfiguration({
  userKey: process.env.ONESIGNAL_USER_KEY,
  appKey: process.env.ONESIGNAL_API_KEY,
});

const client = new OneSignal.DefaultApi(configuration);
async function sendNotification(message, heading) {
  try {
      const notification = new Notification();
      notification.app_id = process.env.ONESIGNAL_APP_ID;

      notification.contents = {
          en: message,
      };

      // Required for Huawei
      notification.headings = {
          en: heading,
      };

      const notificationResponse = await client.createNotification(notification);
      console.log('Notification sent:', notificationResponse.data);
  } catch (error) {
      console.error('Error sending notification:', error.response?.data || error.message);
  }

}
async function sendNotificationToUser(heading, message, playerId) {
  try {
      const notification = new Notification();
      notification.app_id = process.env.ONESIGNAL_APP_ID;

      notification.contents = {
          en: message,
      };

      // Required for Huawei
      notification.headings = {
          en: heading,
      };

      // Target individual users by their player IDs
      notification.include_aliases = {
        external_id: [
          playerId,
        ]
      };

      const notificationResponse = await client.createNotification(notification);
      console.log('Notification sent:', notificationResponse.data);
  } catch (error) {
      console.error('Error sending notification:', error.response?.data || error.message);
  }
}
  
module.exports = {
    sendNotification,
    sendNotificationToUser
};