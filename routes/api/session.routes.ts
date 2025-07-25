import express, { Request, Response } from 'express';

import redis from '../../lib/redis';

const router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
	const sessionId = req.cookies.session_id;
	if (!sessionId) {
		res.status(401).json({ error: 'No session ID' });
		return;
	}

	const data = await redis.get(`redux:${sessionId}`);
	res.json(JSON.parse(data || '{}'));
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
	const sessionId = req.cookies.session_id;
	if (!sessionId) {
		res.status(401).json({ error: 'No session ID' });
		return;
	}

	await redis.set(`redux:${sessionId}`, JSON.stringify(req.body), {
		EX: 365 * 60 * 60 * 24, // 365 days
	});
	res.sendStatus(200);
});

export default router;
