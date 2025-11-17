import { config } from 'dotenv';
import { COMPANY_ROLE } from '@prisma/client';
import { Response } from 'express';

import elasticsearch from '../../elasticsearch/index.js';
import ReservationModuleDao from '../../dao/reservation/ReservationModule.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';
import type { UpdateReservationSettingsRequest } from '../../schemas/dto/reservations/reservation-module/reservation-module.dto';

// Import DTO types for API documentation
//import type { ReservationModuleDAOResponse, ReservationModulePublicDAOResponse } from '../../schemas/dto/reservations/reservation-module/reservation-module.dto.js';

config();
const businessIndex = elasticsearch.businessIndex as (business_id?: string | null, force?: boolean) => Promise<void>;

/**
 * POST /reservation/admin/settings/update
 * @tag Reservation
 * @summary Update reservation settings
 * @description Director-only: updates reservation module settings for the current business.
 * @operationId updateReservationSettings
 * @bodyContent {UpdateReservationSettingsRequest} application/json
 * @response 200 - Settings updated successfully
 * @responseContent {ReservationModuleDAOResponse} 200.application/json
 * @response 400 - Error updating business reservation settings
 * @prisma_model reservation_module
 */
export async function updateReservationSettings(
	req: ValidatedRequest<UpdateReservationSettingsRequest>,
	res: Response
): Promise<void> {
	try {
		const { business_id, business_user_id, company_role, user_id, reservation_module_id } = req.user!;
		const { hours_before_reschedule, hours_before_cancel, publicly_visible } = req.body;
		if (!business_id || !business_user_id || !company_role || !reservation_module_id) {
			throw new Error('Invalid business user_data');
		}
		let reservation_module = null;
		if (company_role === COMPANY_ROLE.DIRECTOR) {
			const updateData = { hours_before_reschedule, hours_before_cancel, publicly_visible };
			reservation_module = await ReservationModuleDao.updateReservationModuleSettings(
				reservation_module_id,
				updateData
			);
			await businessIndex(business_id);
			res.status(200).json(reservation_module);
		}
	} catch (e) {
		console.error('Error updating business reservation settings:', e);
		res.status(400).json({ error: 'Error updating business reservation settings', e });
	}
}

/**
 * GET /reservation/:business_id
 * @tag Reservation
 * @summary Get reservation module by business ID
 * @description Retrieves the reservation module for the authenticated business.
 * @operationId getReservationModuleByBusinessId
 * @pathParam {string} business_id - The ID of the business.
 * @response 200 - Reservation module retrieved successfully
 * @responseContent {ReservationModuleDAOResponse} 200.application/json
 * @response 400 - Error retrieving reservation module
 * @prisma_model reservation_module
 */
export async function getReservationModuleByBusinessId(
	req: ValidatedRequest<null, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id } = req.user!;

		if (!business_id || business_id !== req.params.business_id) {
			throw new Error('Invalid business data');
		}
		let reservation_module = null;
		reservation_module = await ReservationModuleDao.getReservationModuleByBusinessId(req.params.business_id);
		res.status(200).json(reservation_module);
	} catch (e) {
		console.error('Error updating business reservation settings:', e);
		res.status(400).json({ error: 'Error updating business reservation settings', e });
	}
}

/**
 * PATCH /reservation/admin/:reservation_module_id/disable
 * @tag Reservation
 * @summary Disable reservation module public visibility
 * @description Sets reservation_module.publicly_visible to false.
 * @operationId disableReservations
 * @pathParam {string} reservation_module_id - The ID of the reservation module to disable.
 * @response 200 - Module disabled
 * @responseContent {ReservationModuleDAOResponse} 200.application/json
 * @response 400 - Error disabling reservations
 * @prisma_model reservation_module
 */
export async function disableReservations(
	req: ValidatedRequest<null, { reservation_module_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { company_role } = req.user!;
		const { reservation_module_id } = req.params;
		if (company_role !== COMPANY_ROLE.DIRECTOR) throw new Error('Forbidden');
		const updated = await ReservationModuleDao.disableReservations(reservation_module_id);
		res.status(200).json(updated);
	} catch (e) {
		console.error('Error disabling reservations:', e);
		res.status(400).json({ error: 'Error disabling reservations', e });
	}
}
/**
 * PATCH /reservation/admin/:reservation_module_id/enable
 * @tag Reservation
 * @summary Enable reservation module public visibility
 * @description Sets reservation_module.publicly_visible to true.
 * @operationId enableReservations
 * @pathParam {string} reservation_module_id - The ID of the reservation module to enable.
 * @response 200 - Module enabled
 * @responseContent {ReservationModuleDAOResponse} 200.application/json
 * @response 400 - Error enabling reservations
 * @prisma_model reservation_module
 */
export async function enableReservations(
	req: ValidatedRequest<null, { reservation_module_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { company_role } = req.user!;
		const { reservation_module_id } = req.params;
		if (company_role !== COMPANY_ROLE.DIRECTOR) throw new Error('Forbidden');
		const updated = await ReservationModuleDao.enableReservations(reservation_module_id);
		res.status(200).json(updated);
	} catch (e) {
		console.error('Error enabling reservations:', e);
		res.status(400).json({ error: 'Error enabling reservations', e });
	}
}
/**
 * POST /reservation/booking/booking-data
 * @tag Reservation
 * @summary Get public booking data by link hash or business ID
 * @description Retrieves reservation module data necessary for public booking flow by public link hash or business ID.
 * @operationId getReservationModuleBookingDataByHashOrBusinessId
 * @bodyContent {GetBookingDataRequest} application/json
 * @response 200 - Booking data retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error fetching booking data
 * @prisma_model reservation_module
 */
export async function getReservationModuleBookingDataByHashOrBusinessId(
	req: ValidatedRequest<{ public_link_hash?: string; business_id?: string }>,
	res: Response
): Promise<void> {
	try {
		if (!req.body.public_link_hash && !req.body.business_id) {
			throw new Error('Invalid business data');
		} else {
			let reservation_module = null;

			reservation_module = await ReservationModuleDao.getReservationModuleByPublicLinkHashOrBusinessId(
				(req.body.public_link_hash ?? req.body.business_id)!
			);
			if (!reservation_module) {
				throw new Error('Reservation module not found.');
			}
			res.status(200).json(reservation_module);
		}
	} catch (e) {
		console.error('Error fetching booking data:', e);
		res.status(400).json({ error: 'Error fetching booking data', e });
	}
}

export default {
	updateReservationSettings,
	getReservationModuleByBusinessId,
	getReservationModuleBookingDataByHashOrBusinessId,
	disableReservations,
	enableReservations,
};
