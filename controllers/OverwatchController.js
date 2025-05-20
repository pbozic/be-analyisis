const prisma = require('../prisma/prisma');
const { SERVICE_TYPE } = require('../lib/constants');

/**
 * GET /overwatch/orders/pagination
 * @tag Overwatch
 * @summary Get orders with pagination.
 * @description This fetches orders with pagination.
 * @operationId getOrdersWithPagination
 * @requestBody {Object} where - Optional filters for the query.
 * @requestBody {Object} orderBy - Optional sorting for the query.
 * @requestBody {number} take - Number of records to fetch.
 * @requestBody {number} page - Page number to fetch.
 * @requestBody {string} service - Type of orders to fetch.
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getOrdersWithPagination(req, res) {
	const { where, orderBy, service } = req.body;
	const page = req.body.page ? parseInt(req.body.page) : 1;
	const take = req.body.take ? parseInt(req.body.take) : 8;

	let includeObj = { user: true, vehicle: true, driver: { include: { user: true } }, business: true };
	if (service === SERVICE_TYPE.DELIVERY) includeObj.delivery_driver = { include: { user: true } };
	const model = service === SERVICE_TYPE.DELIVERY ? prisma.delivery_orders : prisma.taxi_orders;
	try {
		const skip = (page - 1) * take;
		const [data, total] = await Promise.all([
			model.findMany({
				take: take,
				skip: skip,
				where,
				orderBy: orderBy ? orderBy : { created_at: 'desc' },
				include: includeObj,
			}),
			model.count({
				where, // Ensure the count matches the filtered results
			}),
		]);

		res.status(200).json({ data, total });
	} catch (error) {
		console.error('OverwatchController', error);
		res.status(500).json({ message: 'Error something went wrong...' });
	}
}

/**
 * PATCH /api/overwatch/drivers/activity/settings
 * @tag DriverSettings
 * @summary Update driver activity settings
 * @description Updates existing driver activity settings or creates new ones if they don't exist
 * @operationId updateDriverActivitySettings
 * @prisma_model driver_activity_settings
 * @bodyContent {
 *   "first_offline_lockout": 30,
 *   "second_offline_lockout": 120,
 *   "online_timeout": 120,
 *   "active": true
 * } application/json
 * @bodyRequired
 * @response 200 - Settings updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid request data
 * @response 500 - Server error while updating settings
 */
async function setDriversActivitySettings(req, res) {
	const data = {
		first_offline_lockout: req.body.first_offline_lockout || 30,
		second_offline_lockout: req.body.second_offline_lockout || 120,
		online_timeout: req.body.online_timeout || 120,
		active: !!req.body.active,
	};
	const settings_id = req.body.driver_activity_settings_id;

	try {
		const settings = await prisma.driver_activity_settings.upsert({
			where: {
				driver_activity_settings_id: settings_id || '00000000-0000-0000-0000-000000000000',
			},
			update: data,
			create: data,
		});

		return res.json(settings);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

async function getDriversActivitySettings(req, res) {
	try {
		const settings = await prisma.driver_activity_settings.findFirst({
			where: {
				active: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
		return res.json(settings);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

module.exports = {
	getOrdersWithPagination,
	getDriversActivitySettings,
	setDriversActivitySettings,
};
