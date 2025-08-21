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

export async function getReservationModuleBookingDataByHash(
	req: ValidatedRequest<null, { public_link_hash: string }>,
	res: Response
): Promise<void> {
	try {
		if (!req.params.public_link_hash) {
			throw new Error('Invalid business data');
		}
		let reservation_module = null;
		reservation_module = await ReservationModuleDao.getReservationModuleByPublicLinkHash(
			req.params.public_link_hash
		);
		res.status(200).json(reservation_module);
	} catch (e) {
		console.error('Error updating business reservation settings:', e);
		res.status(400).json({ error: 'Error updating business reservation settings', e });
	}
}

export default {
	updateReservationSettings,
	getReservationModuleByBusinessId,
	getReservationModuleBookingDataByHash,
};
