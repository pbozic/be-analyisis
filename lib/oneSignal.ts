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
async function sendNotification(message: string, heading: string): Promise<void> {
	try {
		const notification = new OneSignal.Notification();
		notification.app_id = process.env.ONESIGNAL_APP_ID as string;
		notification.contents = { en: message } as any;
		notification.target_channel = 'push' as any;
		notification.headings = { en: heading } as any;
		const notificationResponse = await client.createNotification(notification);
		console.log('Notification sent:', notificationResponse);
	} catch (error: any) {
		console.error('Error sending notification:', error.response?.data || error.message);
	}
}
/**
 * Send a push notification to a specific user via OneSignal using their external user ID.
 *
 * @param {object} heading - Notification heading.
 * @param {object} message - Notification message.
 * @param {string | undefined} userId - External user ID of the recipient.
 * @returns {Promise<void>}
 */
async function sendNotificationToUser(heading: string, message: string, userId: string | undefined): Promise<void> {
	try {
		const notification = new OneSignal.Notification();
		notification.app_id = process.env.ONESIGNAL_APP_ID as string;
		notification.contents = { en: message } as any;
		notification.target_channel = 'push' as any;
		notification.headings = { en: heading } as any;
		notification.include_aliases = { external_id: [userId] } as any;
		const notificationResponse = await client.createNotification(notification);
		console.log('Notification sent:', notificationResponse);
	} catch (error: any) {
		console.error('Error sending notification:', error.response?.data || error.message);
	}
}

export { sendNotification, sendNotificationToUser };
export default { sendNotification, sendNotificationToUser };
