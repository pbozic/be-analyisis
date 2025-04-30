const prisma = require("../prisma/prisma");

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

	const model = service === SERVICE_TYPE.DELIVERY ? prisma.delivery_orders : prisma.taxi_orders;
	try {
		const skip = (page-1)*take;
		const [data, total] = await Promise.all([
			model.findMany({
				take: take,
				skip: skip,
				where,
				orderBy: orderBy ? orderBy : { created_at: 'desc' },
				include: { user: true, vehicle: true, driver: { include: { user: true } } }
			}),
			model.count({
				where // Ensure the count matches the filtered results
			}),
		]);

		res.status(200).json({ data, total });
	} catch (error) {
		console.error("OverwatchController", error);
		res.status(500).json({ message: "Error something went wrong..." });
	}
}

module.exports = {
	getOrdersWithPagination,
}