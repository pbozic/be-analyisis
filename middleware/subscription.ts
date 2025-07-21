import { Response, NextFunction } from 'express';

import { ValidatedRequest } from '../types/validatedRequest';
import { canPerformActionReservation } from '../lib/subscriptionHelpers.ts';

export const actionCheckMiddleware = async function (actionName: string) {
	return async (req: ValidatedRequest, res: Response, next: NextFunction) => {
		let reservationModuleId = req.user?.reservation_module_id;
		if (!reservationModuleId) {
			return res.status(403).json({ error: 'Forbidden' });
		}

		const result = await canPerformActionReservation(reservationModuleId, actionName);
		if (!result.allowed) {
			return res.status(403).json({ error: 'Forbidden', usage: result.usage, limit: result.limit });
		}

		next();
	};
};
