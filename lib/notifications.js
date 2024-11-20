// Function to send notifications based on order status
const { sendNotificationToUser } = require("./oneSignal");
const { getDriverById } = require("../dao/Driver");

async function sendOrderNotifications(user_id, driver_id, status) {
	const notifications = {
		PENDING: {
			user: null,
			driver: null
		},
		TAXI_ACCEPTED: {
			user: "Your taxi order has been accepted.",
			driver: null
		},
		TAXI_REJECTED: {
			user: "Your taxi order has been rejected. A new driver will accept your request shortly.",
			driver: null
		},
		TAXI_CANCELED: {
			user: "Your taxi order has been canceled.",
			driver: "The taxi order has been canceled."
		},
		TAXI_WAITING: {
			user: "Your driver is waiting for you.",
			driver: null //"You are waiting for the customer."
		},
		TAXI_DRIVING: {
			user: "Your driver is on the way.",
			driver: null//"You are driving to pick up the customer."
		},
		TAXI_ARRIVED: {
			user: "Your driver has arrived.",
			driver: "You have arrived at the pickup location."
		},
		TAXI_COMPLETED: {
			user: "Your ride has been completed. Thank you for using our service!",
			driver: null//"You have completed the ride."
		},
		CUSTOMER_CANCELED: {
			user: null,
			driver: "The customer has canceled the order."
		}
	};

	// Send notifications based on the order's status
	if (user_id && notifications[status].user !== null) {
		return await sendNotificationToUser("Taxi Order Update", notifications[status].user, user_id);
	}
	console.log("DRIVER NOTIFICATION_OUT", driver_id, status);
	if (driver_id) {
		console.log("DRIVER NOTIFICATION", notifications[status].driver);

		const driver = await getDriverById(driver_id);
		if (driver && notifications[status].driver !== null) {
			return await sendNotificationToUser("Taxi Order Update", notifications[status].driver, driver.user_id);
		}
	}
	return false;
}

module.exports = {
	sendOrderNotifications
};