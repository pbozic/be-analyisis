import OneSignal from '@onesignal/node-onesignal';
import { config } from 'dotenv';
config();
const configuration = OneSignal.createConfiguration({
	userAuthKey: process.env.ONESIGNAL_USER_KEY,
	restApiKey: process.env.ONESIGNAL_API_KEY,
});
const client = new OneSignal.DefaultApi(configuration);
/**
 * Send a push notification to all users via OneSignal.
 *
 * @param {object} message
 * @param {object} heading
 * @returns {Promise<void>}
 */
async function sendNotification(message, heading) {
	try {
		const notification = new OneSignal.Notification();
		notification.app_id = process.env.ONESIGNAL_APP_ID;
		notification.contents = {
			en: message,
		};
		notification.target_channel = 'push';
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
/**
 * Send a push notification to a specific user via OneSignal using their external user ID.
 *
 * @param {object} heading - Notification heading.
 * @param {object} message - Notification message.
 * @param {string} userId - External user ID of the recipient.
 * @returns {Promise<void>}
 */
async function sendNotificationToUser(heading, message, userId) {
	try {
		const notification = new OneSignal.Notification();
		notification.app_id = process.env.ONESIGNAL_APP_ID;
		notification.contents = {
			en: message,
		};
		notification.target_channel = 'push';
		// Required for Huawei
		notification.headings = {
			en: heading,
		};
		// Target individual users by their player IDs
		notification.include_aliases = {
			external_id: [userId],
		};
		const notificationResponse = await client.createNotification(notification);
		console.log('Notification sent:', notificationResponse.data);
	} catch (error) {
		console.error('Error sending notification:', error.response?.data || error.message);
	}
}
export { sendNotification };
export { sendNotificationToUser };
export default {
	sendNotification,
	sendNotificationToUser,
};
