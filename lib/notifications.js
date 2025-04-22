// Function to send notifications based on order status
const { sendNotificationToUser } = require("./oneSignal");
const { getDriverById } = require("../dao/Driver");
const { getLocalisedTexts } = require("../localisations/languages");
const { getDeliveryDriverById } = require("../dao/DeliveryDriver");
const { USER_ROLE } = require("./constants");
async function sendOrderNotifications(user, driver, user_id, driver_id, status) {
	const l10nTextUser = getLocalisedTexts("USER_NOTIFICATIONS", user);
	const l10nTextDriver = getLocalisedTexts("DRIVER_NOTIFICATIONS", driver);
	const l10nTextHeadingUser = getLocalisedTexts("HEADING", user);
	const l10nTextHeadingDriver = getLocalisedTexts("HEADING", driver);
	const notifications = {
		PENDING: {
			user: null,
			driver: null
		},
		TAXI_ACCEPTED: {
			// user: "Your taxi order has been accepted.",
			user: l10nTextUser.accepted,
			driver: null
		},
		TAXI_REJECTED: {
			// user: "Your taxi order has been rejected. A new driver will accept your request shortly.",
			user: l10nTextUser.rejected,
			driver: null
		},
		TAXI_CANCELED: {
			// user: "Your taxi order has been canceled.",
			// driver: "The taxi order has been canceled."
			user: l10nTextUser.canceled,
			driver: l10nTextDriver.canceled

		},
		TAXI_WAITING: {
			// user: "Your driver is waiting for you.",
			user: l10nTextUser.waiting,
			driver: null //"You are waiting for the customer."
		},
		TAXI_DRIVING: {
			// user: "Your driver is on the way.",
			user: l10nTextUser.driving,
			driver: null//"You are driving to pick up the customer."
		},
		TAXI_ARRIVED: {
			// user: "Your driver has arrived.",
			// driver: "You have arrived at the pickup location."
			user: l10nTextUser.arrived,
			driver: l10nTextDriver.arrived
		},
		TAXI_COMPLETED: {
			// user: "Your ride has been completed. Thank you for using our service!",
			user: l10nTextUser.completed,
			driver: null//"You have completed the ride."
		},
		CUSTOMER_CANCELED: {
			user: null,
			// driver: "The customer has canceled the order."
			driver: l10nTextDriver.customerCanceled

		}
	};
	// Send notifications based on the order's status
	if (user_id && notifications[status].user !== null) {
		await sendNotificationToUser(l10nTextHeadingUser.taxi, notifications[status].user, user_id);
	}
	console.log("DRIVER NOTIFICATION_OUT", driver_id, status);
	if (driver_id) {
		console.log("DRIVER NOTIFICATION", notifications[status].driver);

		const driver = await getDriverById(driver_id);
		// Commented out online checking version of if, as no scenario should really need it
		// if (driver && driver.online && notifications[status].driver !== null) {
		if (driver && notifications[status].driver !== null) {
			return await sendNotificationToUser(l10nTextHeadingDriver.taxi, notifications[status].driver, driver.user_id);
		}
	}
	return false;
}

async function sendDeliveryOrderNotifications(user, driver, user_id, driver_user_id, status) {
	const l10nTextUser = getLocalisedTexts("DELIVERY_NOTIFICATIONS", user);
	const l10nTextDriver = getLocalisedTexts("DELIVERY_DRIVER_NOTIFICATIONS", driver);
	const l10nTextHeadingUser = getLocalisedTexts("HEADING", user);
	const l10nTextHeadingDriver = getLocalisedTexts("HEADING", driver);

	const notifications = {
		MERCHANT_ACCEPTED: {
			user: l10nTextUser.accepted,
			driver: null
		},
		AUTO_REJECTED: {
			user: l10nTextUser.rejected,
			driver: null
		},
		MERCHANT_REJECTED: {
			user: l10nTextUser.rejected,
			driver: null
		},
		MERCHANT_READY_FOR_PICKUP: {
			user: null,
			driver: l10nTextDriver.ready_for_pickup
		},
		MERCHANT_DELAYED: {
			user: null,
			driver: l10nTextDriver.delayed
		},
		DELIVERY_IN_DELIVERY: {
			user: l10nTextUser.inDelivery,
			driver: null
		},
		ORDER_FINISHED_SUCCESS: {
			user: l10nTextUser.completed,
			driver: null
		},
		DISPATCHER_CANCELED: {
			user: l10nTextUser.canceled,
			driver: l10nTextDriver.canceled
		},
	};

	if (user_id && notifications[status] && notifications[status].user !== null) {
		await sendNotificationToUser(l10nTextHeadingUser.delivery, notifications[status]?.user, user_id);
	}
	console.log("DELIVERY DRIVER NOTIFICATION_OUT", driver_user_id, status);
	if (driver_user_id && notifications[status] && notifications[status].driver !== null) {
		return await sendNotificationToUser(l10nTextHeadingDriver.delivery, notifications[status]?.driver, driver_user_id);
	}
	return false;
}

async function sendCreditExpirationNotifications(user) {
	const l10nText = getLocalisedTexts("CREDIT_NOTIFICATIONS", user);
	const l10nTextHeading = getLocalisedTexts("HEADING", user);

	if (user?.user_id) {
		return await sendNotificationToUser(l10nTextHeading?.creditExpiry, l10nText?.creditExpiry, user.user_id);
	} else {
		return false;
	}
}

async function sendReferralNotifications(user) {
	const l10nText = getLocalisedTexts("REFERRAL_NOTIFICATIONS", user);
	const l10nTextHeading = getLocalisedTexts("HEADING", user);

	if (user?.user_id) {
		return await sendNotificationToUser(l10nTextHeading?.referral, l10nText?.referral, user.user_id);
	} else {
		return false;
	}
}

module.exports = {
	sendOrderNotifications,
	sendDeliveryOrderNotifications,
	sendCreditExpirationNotifications,
	sendReferralNotifications,
};