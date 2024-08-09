// Function to send notifications based on order status
const { sendNotificationToUser } = require("./oneSignal");
const { getDriverById } = require("../dao/Driver");

async function sendOrderNotifications(order, status) {
	const notifications = {
		PENDING: {
			user: "Your taxi order is pending.",
			driver: null
		},
		TAXI_ACCEPTED: {
			user: "Your taxi order has been accepted.",
			driver: "You have a new taxi order to accept."
		},
		TAXI_REJECTED: {
			user: "Your taxi order has been rejected. Please try again.",
			driver: null
		},
		TAXI_CANCELED: {
			user: "Your taxi order has been canceled.",
			driver: "The taxi order has been canceled."
		},
		TAXI_WAITING: {
			user: "Your driver is waiting for you.",
			driver: "You are waiting for the customer."
		},
		TAXI_DRIVING: {
			user: "Your driver is on the way.",
			driver: "You are driving to pick up the customer."
		},
		TAXI_ARRIVED: {
			user: "Your driver has arrived.",
			driver: "You have arrived at the pickup location."
		},
		TAXI_COMPLETED: {
			user: "Your ride has been completed. Thank you for using our service!",
			driver: "You have completed the ride."
		},
		CUSTOMER_CANCELED: {
			user: null,
			driver: "The customer has canceled the order."
		}
	};

	// Send notifications based on the order's status
	if (order.user_id && notifications[status].user) {
		sendNotificationToUser("Taxi Order Update", notifications[status].user, order.user_id);
	}
	if (order.driver_id) {
		const driver = await getDriverById(order.driver_id);
		if (driver && notifications[status].driver) {
			sendNotificationToUser("Taxi Order Update", notifications[status].driver, driver.user_id);
		}
	}
}

module.exports = {
	sendOrderNotifications
};