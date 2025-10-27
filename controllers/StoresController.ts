import { Request, Response } from 'express';

import * as StoresDao from '../dao/Stores.ts';

/**
 *
 * - PATCH /stores/{stores_id}/online
 * - @tag Stores
 * - @summary Toggle a store online status
 * - @description Sets stores.online flag.
 * - @operationId setStoreOnline
 * - @bodyDescription Online state
 * - @bodyContent { "online": true } application/json
 * - @bodyRequired
 * - @prisma_model stores
 * - @response 200 - Store updated
 */
export async function setStoreOnline(req: Request, res: Response): Promise<void> {
	try {
		const { stores_id } = req.params as { stores_id: string };
		const { online } = req.body as { online: boolean };
		const updated = await StoresDao.setStoreOnline(stores_id, !!online);
		res.json(updated);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - PATCH /stores/{stores_id}/overwhelmed
 * - @tag Stores
 * - @summary Toggle a store overwhelmed status
 * - @description Sets stores.overwhelmed flag.
 * - @operationId setStoreOverwhelmed
 * - @bodyDescription Overwhelmed state
 * - @bodyContent { "overwhelmed": true } application/json
 * - @bodyRequired
 * - @prisma_model stores
 * - @response 200 - Store updated
 */
export async function setStoreOverwhelmed(req: Request, res: Response): Promise<void> {
	try {
		const { stores_id } = req.params as { stores_id: string };
		const { overwhelmed } = req.body as { overwhelmed: boolean };
		const updated = await StoresDao.setStoreOverwhelmed(stores_id, !!overwhelmed);
		res.json(updated);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - POST /stores/{stores_id}/disable
 * - @tag Stores
 * - @summary Disable a store
 * - @description Sets stores.enabled=false and stores.online=false.
 * - @operationId disableStore
 * - @prisma_model stores
 * - @response 200 - Store disabled
 */
export async function disableStore(req: Request, res: Response): Promise<void> {
	try {
		const { stores_id } = req.params as { stores_id: string };
		const updated = await StoresDao.disableStore(stores_id);
		res.json(updated);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - POST /stores/{stores_id}/enable
 * - @tag Stores
 * - @summary Enable a store
 * - @description Sets stores.enabled=true.
 * - @operationId enableStore
 * - @prisma_model stores
 * - @response 200 - Store enabled
 */
export async function enableStore(req: Request, res: Response): Promise<void> {
	try {
		const { stores_id } = req.params as { stores_id: string };
		const updated = await StoresDao.enableStore(stores_id);
		res.json(updated);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { setStoreOnline, setStoreOverwhelmed, disableStore, enableStore };
