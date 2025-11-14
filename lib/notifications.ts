import { sendNotificationToUser } from './oneSignal.js';
import { getDriverById } from '../dao/Driver.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { UserBase } from '../schemas/dto/User/index.js';

/**
 * Send order status notifications to user and driver based on order status.
 *
 * @param {string} userLang
 * @param {string} driverLang
 * @param {string} user_id
 * @param {string} driver_id
 * @param {string} status
 * @returns {Promise<void>}
 */
async function sendOrderNotifications(
	userLang: string,
	driverLang: string,
	user_id: string | null,
	driver_id: string | null,
	status: string
): Promise<void> {
	const l10nTextUser = getLocalisedTexts('USER_NOTIFICATIONS', userLang);
	const l10nTextDriver = getLocalisedTexts('DRIVER_NOTIFICATIONS', driverLang);
	const l10nTextHeadingUser = getLocalisedTexts('HEADING', userLang);
	const l10nTextHeadingDriver = getLocalisedTexts('HEADING', driverLang);

	const notifications: Record<string, { user: string | null; driver: string | null }> = {
		PENDING: { user: null, driver: null },
		TAXI_ACCEPTED: { user: l10nTextUser.accepted, driver: null },
		TAXI_REJECTED: { user: l10nTextUser.rejected, driver: null },
		TAXI_CANCELED: { user: l10nTextUser.canceled, driver: l10nTextDriver.canceled },
		TAXI_WAITING: { user: l10nTextUser.waiting, driver: null },
		TAXI_DRIVING: { user: l10nTextUser.driving, driver: null },
		TAXI_ARRIVED: { user: l10nTextUser.arrived, driver: l10nTextDriver.arrived },
		TAXI_COMPLETED: { user: l10nTextUser.completed, driver: null },
		CUSTOMER_CANCELED: { user: null, driver: l10nTextDriver.customerCanceled },
	};

	const spec = notifications[status] || { user: null, driver: null };
	if (user_id && spec.user !== null) {
		await sendNotificationToUser(l10nTextHeadingUser?.taxi || '', spec.user || '', user_id);
	}

	if (driver_id) {
		const d = await getDriverById(driver_id);
		if (d && spec.driver !== null) {
			await sendNotificationToUser(l10nTextHeadingDriver?.taxi || '', spec.driver || '', d.user_id);
		}
	}
}
/**
 * Send delivery order status notifications to user and driver based on order status.
 *
 * @param {string} userLang
 * @param {string} driverLang
 * @param {string} user_id
 * @param {string} driver_user_id
 * @param {string} status
 * @returns {Promise<void>}
 */
async function sendDeliveryOrderNotifications(
	userLang: string,
	driverLang: string,
	user_id: string | null,
	driver_user_id: string | null,
	status: string
): Promise<void> {
	const l10nTextUser = getLocalisedTexts('DELIVERY_NOTIFICATIONS', userLang);
	const l10nTextDriver = getLocalisedTexts('DELIVERY_DRIVER_NOTIFICATIONS', driverLang);
	const l10nTextHeadingUser = getLocalisedTexts('HEADING', userLang);
	const l10nTextHeadingDriver = getLocalisedTexts('HEADING', driverLang);

	const notifications: Record<string, { user: string | null; driver: string | null }> = {
		MERCHANT_ACCEPTED: { user: l10nTextUser.accepted, driver: null },
		AUTO_REJECTED: { user: l10nTextUser.rejected, driver: null },
		MERCHANT_REJECTED: { user: l10nTextUser.rejected, driver: null },
		MERCHANT_READY_FOR_PICKUP: { user: null, driver: l10nTextDriver.ready_for_pickup },
		MERCHANT_DELAYED: { user: null, driver: l10nTextDriver.delayed },
		DELIVERY_IN_DELIVERY: { user: l10nTextUser.inDelivery, driver: null },
		ORDER_FINISHED_SUCCESS: { user: l10nTextUser.completed, driver: null },
		DISPATCHER_CANCELED: { user: l10nTextUser.canceled, driver: l10nTextDriver.canceled },
		DRIVER_NEARBY: { user: l10nTextUser.driverClose, driver: null },
	};

	const specD = notifications[status] || { user: null, driver: null };
	if (user_id && specD.user !== null) {
		await sendNotificationToUser(l10nTextHeadingUser?.delivery || '', specD.user || '', user_id);
	}

	if (driver_user_id && specD.driver !== null) {
		await sendNotificationToUser(l10nTextHeadingDriver?.delivery || '', specD.driver || '', driver_user_id);
	}
}
/**
 * Sends credit expiration notifications to the user.
 * @param {UserBase} user
 */
async function sendCreditExpirationNotifications(user: UserBase): Promise<void> {
	const l10nText = getLocalisedTexts('CREDIT_NOTIFICATIONS', user.language);
	const l10nTextHeading = getLocalisedTexts('HEADING', user.language);
	if (user && user.user_id) {
		await sendNotificationToUser(l10nTextHeading?.creditExpiry || '', l10nText?.creditExpiry || '', user.user_id);
	}
}
/**
 * Sends referral notifications to the user.
 * @param {UserBase} user
 */
async function sendReferralNotifications(user: UserBase): Promise<void> {
	const l10nText = getLocalisedTexts('REFERRAL_NOTIFICATIONS', user.language);
	const l10nTextHeading = getLocalisedTexts('HEADING', user.language);
	if (user && user.user_id) {
		await sendNotificationToUser(l10nTextHeading?.referral || '', l10nText?.referral || '', user.user_id);
	}
}

export {
	sendOrderNotifications,
	sendDeliveryOrderNotifications,
	sendCreditExpirationNotifications,
	sendReferralNotifications,
};
export default {
	sendOrderNotifications,
	sendDeliveryOrderNotifications,
	sendCreditExpirationNotifications,
	sendReferralNotifications,
};
