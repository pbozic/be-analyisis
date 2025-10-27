import { config } from 'dotenv';
import { COMPANY_ROLE } from '@prisma/client';
import { Response } from 'express';

import elasticsearch from '../../elasticsearch/index.js';
import ReservationModuleDao from '../../dao/reservation/ReservationModule.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';
import { UpdateReservationSettingsInput } from '../../types/reservation/ReservationModule.ts';

config();
const businessIndex = elasticsearch.businessIndex as (business_id?: string | null, force?: boolean) => Promise<void>;

export async function updateReservationSettings(
	req: ValidatedRequest<UpdateReservationSettingsInput>,
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
 *
 * - PATCH /reservation/admin/{reservation_module_id}/disable
 * - @tag Reservations
 * - @summary Disable reservation module public visibility
 * - @description Sets reservation_module.publicly_visible to false.
 * - @operationId disableReservations
 * - @prisma_model reservation_module
 * - @response 200 - Module disabled
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
 *
 * - PATCH /reservation/admin/{reservation_module_id}/enable
 * - @tag Reservations
 * - @summary Enable reservation module public visibility
 * - @description Sets reservation_module.publicly_visible to true.
 * - @operationId enableReservations
 * - @prisma_model reservation_module
 * - @response 200 - Module enabled
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
