import { Response } from 'express';

import prisma from '../prisma/prisma.js';
import { SERVICE_TYPE } from '../lib/constants.js';
import { ValidatedRequest } from '../types/validatedRequest.js';
import {
	GetOrdersWithPaginationInput,
	UpdateDriverActivitySettingsInput,
} from '../schemas/dto/Overwatch/overwatch.dto.js';
import { DeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/deliveryOrder.dto.js';
import { TaxiOrderDetail } from '../schemas/dto/TaxiOrders/taxiOrder.dto.js';
/**
 * POST /overwatch/orders/pagination
 * @tag Overwatch
 * @summary Get orders with pagination.
 * @description This fetches orders with pagination.
 * @operationId getOrdersWithPagination
 * @bodyContent {GetOrdersWithPagination} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {[DeliveryOrderDetail[] | TaxiOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model taxi_orders
 * @prisma_model delivery_orders
 */
async function getOrdersWithPagination(
	req: ValidatedRequest<GetOrdersWithPaginationInput>,
	res: Response
): Promise<void> {
	const { where, orderBy, service, page, take } = req.body;
	const model = service === SERVICE_TYPE.DELIVERY ? prisma.delivery_orders : prisma.taxi_orders;
	try {
		const skip = (page - 1) * take;
		const [data, total]: [DeliveryOrderDetail[] | TaxiOrderDetail[], number] = await Promise.all([
			model.findMany({
				take: take,
				skip: skip,
				where,
				orderBy: orderBy ? orderBy : { created_at: 'desc' },
				include: { user: true, vehicle: true, driver: { include: { user: true } } },
			}),
			model.count({
				where, // Ensure the count matches the filtered results
			}),
		]);
		res.status(200).json({ data, total });
	} catch (error: unknown) {
		console.error('OverwatchController', (error as Error).message);
		res.status(500).json({ message: 'Error something went wrong...' });
	}
}
/**
 * PATCH /overwatch/drivers/activity/settings
 * @tag DriverSettings
 * @summary Update driver activity settings
 * @description Updates existing driver activity settings or creates new ones if they don't exist
 * @operationId updateDriverActivitySettings
 * @bodyContent {UpdateDriverActivitySettings} application/json
 * @bodyRequired
 * @response 200 - Settings updated successfully
 * @responseContent {DriverActivitySettingsResponse} 200.application/json
 * @response 400 - Invalid request data
 * @response 500 - Server error while updating settings
 * @prisma_model driver_activity_settings
 */
async function setDriversActivitySettings(
	req: ValidatedRequest<UpdateDriverActivitySettingsInput>,
	res: Response
): Promise<void> {
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
				driver_activity_settings_id: settings_id,
			},
			update: data,
			create: data,
		});
		res.json(settings);
	} catch (error: unknown) {
		res.status(500).json({ error: (error as Error).message });
	}
}

/**
 * GET /overwatch/drivers/activity/settings
 * @tag DriverSettings
 * @summary Get active driver activity settings
 * @description Retrieves the most recently created active driver activity settings.
 * @operationId getDriverActivitySettings
 * @response 200 - Settings retrieved successfully
 * @responseContent {DriverActivitySettingsResponse} 200.application/json
 * @response 500 - Server error while fetching settings
 * @prisma_model driver_activity_settings
 */
async function getDriversActivitySettings(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const settings = await prisma.driver_activity_settings.findFirst({
			where: {
				active: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
		res.json(settings);
	} catch (error: unknown) {
		res.status(500).json({ error: (error as Error).message });
	}
}

export { getOrdersWithPagination };
export { getDriversActivitySettings };
export { setDriversActivitySettings };
export default {
	getOrdersWithPagination,
	getDriversActivitySettings,
	setDriversActivitySettings,
};
