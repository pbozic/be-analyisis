import express from 'express';

import { findSlots } from '../../../lib/bookingHelpers';

const router = express.Router();

router.post('/find-slots', async (req, res) => {
	const { services, locationId, employeeId, reservationModuleId, date } = req.body;

	try {
		const slots = await findSlots({
			serviceIds: services,
			locationId,
			employeeId,
			reservationModuleId,
			date,
		});
		res.json(slots);
	} catch (error) {
		console.error('Error finding slots:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

export default router;
