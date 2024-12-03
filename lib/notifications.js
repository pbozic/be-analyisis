// Function to send notifications based on order status
const { sendNotificationToUser } = require("./oneSignal");
const { getDriverById } = require("../dao/Driver");
const { getUserById } = require("../dao/User");
const { getLocalisedTexts } = require("../localisations/languages");
const testFunction = ()=>{
	const user_id = "a15f3d54-ceb7-4692-8e24-c2854d7b8a5a"
	const driver_id = "90eb1232-0fcb-4022-826f-61742992dfca"

	getUserById(user_id).then(user=>{
		getDriverById(driver_id).then(driver=>{
			sendOrderNotifications(user,driver,user_id, driver_id, "TAXI_CANCELED").then(
				res=>console.log("RETURNED FROM NOTFICATION:",res)
			)
		})
	})
}
testFunction()

async function sendOrderNotifications(user,driver,user_id, driver_id, status) {
	const l10nTextUser = getLocalisedTexts("USER_NOTIFICATIONS", user);
	const l10nTextDriver = getLocalisedTexts("DRIVER_NOTIFICATIONS",driver);
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
		return await sendNotificationToUser("Taxi Order Update", notifications[status].user, user_id);
	}
	console.log("DRIVER NOTIFICATION_OUT", driver_id, status);
	if (driver_id) {
		console.log("DRIVER NOTIFICATION", notifications[status].driver);

		const driver = await getDriverById(driver_id);
		if (driver && driver.online && notifications[status].driver !== null) {
			return await sendNotificationToUser("Taxi Order Update", notifications[status].driver, driver.user_id);
		}
	}
	return false;
}

module.exports = {
	sendOrderNotifications
};