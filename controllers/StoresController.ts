import { Response } from 'express';

import * as StoresDao from '../dao/Stores.ts';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import { StoreOnlineBody, StoreOverwhelmedBody } from '../schemas/dto/Stores/store.dto.ts';

/**
 * PATCH /stores/:stores_id/online
 * @tag Stores
 * @summary Toggle a store's online status
 * @description Sets a store's online flag.
 * @operationId setStoreOnline
 * @bodyDescription Online state
 * @bodyContent {StoreOnlineBody} application/json
 * @bodyRequired
 * @response 200 - Store updated
 * @responseContent {StoreBase} 200.application/json
 * @response 500 - Error updating store
 * @prisma_model stores
 */
export async function setStoreOnline(
	req: ValidatedRequest<StoreOnlineBody, { stores_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { stores_id } = req.params;
		const { online } = req.body;
		const updated = await StoresDao.setStoreOnline(stores_id, !!online);
		res.json(updated);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * PATCH /stores/:stores_id/overwhelmed
 * @tag Stores
 * @summary Toggle a store's overwhelmed status
 * @description Sets a store's overwhelmed flag.
 * @operationId setStoreOverwhelmed
 * @bodyDescription Overwhelmed state
 * @bodyContent {StoreOverwhelmedBody} application/json
 * @bodyRequired
 * @response 200 - Store updated
 * @responseContent {StoreBase} 200.application/json
 * @response 500 - Error updating store
 * @prisma_model stores
 */
export async function setStoreOverwhelmed(
	req: ValidatedRequest<StoreOverwhelmedBody, { stores_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { stores_id } = req.params;
		const { overwhelmed } = req.body;
		const updated = await StoresDao.setStoreOverwhelmed(stores_id, !!overwhelmed);
		res.json(updated);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * POST /stores/{stores_id}/disable
 * @tag Stores
 * @summary Disable a store
 * @description Sets a store's enabled flag to false and online flag to false.
 * @operationId disableStore
 * @response 200 - Store disabled
 * @responseContent {StoreBase} 200.application/json
 * @response 500 - Error disabling store
 * @prisma_model stores
 */
export async function disableStore(req: ValidatedRequest<never, { stores_id: string }>, res: Response): Promise<void> {
	try {
		const { stores_id } = req.params;
		const updated = await StoresDao.disableStore(stores_id);
		res.json(updated);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * POST /stores/:stores_id/enable
 * @tag Stores
 * @summary Enable a store
 * @description Sets a store's enabled flag to true.
 * @operationId enableStore
 * @response 200 - Store enabled
 * @responseContent {StoreBase} 200.application/json
 * @response 500 - Error enabling store
 * @prisma_model stores
 */
export async function enableStore(req: ValidatedRequest<never, { stores_id: string }>, res: Response): Promise<void> {
	try {
		const { stores_id } = req.params;
		const updated = await StoresDao.enableStore(stores_id);
		res.json(updated);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { setStoreOnline, setStoreOverwhelmed, disableStore, enableStore };
