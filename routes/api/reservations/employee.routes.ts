import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Employee Reservations API');
});

export default router;
