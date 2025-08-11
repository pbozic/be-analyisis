import express from 'express';

import { findSlots } from '../../../lib/bookingHelpers';

const router = express.Router();

router.post('/find-slots', async (req, res) => {
	const { serviceIds, locationId, employeeId, reservationModuleId, date, returnFirst } = req.body;

	try {
		const slots = await findSlots({
			serviceIds,
			locationId,
			employeeId,
			reservationModuleId,
			date,
			returnFirst,
		});
		res.json(slots);
	} catch (error) {
		console.error('Error finding slots:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

export default router;
