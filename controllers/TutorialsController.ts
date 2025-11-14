import { Response } from 'express';

import * as TutorialsDao from '../dao/Tutorials.ts';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import { TutorialDetail, UserTutorialBase } from '../schemas/dto/Tutorials/tutorials.dto.ts';
import { SetTutorialStatusBody } from '../schemas/dto/Tutorials/tutorials.validators.ts';

/**
 * GET /users/me/tutorials
 * @tag Tutorials
 * @summary List tutorials with current user's status
 * @description Returns all tutorials with status for the current epoch for the authenticated user.
 * @operationId listTutorialsWithStatus
 * @response 200 - Tutorials with status listed
 * @responseContent {TutorialDetail[]} 200.application/json
 * @prisma_model tutorial
 * @prisma_model user_tutorials
 * @prisma_model user_tutorial_state
 */
export async function listTutorials(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const tutorials: TutorialDetail[] = await TutorialsDao.listTutorialsWithStatus(user_id);
		res.json({ tutorials });
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * POST /users/me/tutorials/state/reset
 * @tag Tutorials
 * @summary Reset tutorials by incrementing epoch for the authenticated user
 * @description Increments user_tutorial_state.epoch which resets per-tutorial statuses for next run.
 * @operationId resetTutorials
 * @response 200 - Tutorials reset (epoch incremented)
 * @responseContent {UserTutorialState} 200.application/json
 * @prisma_model user_tutorial_state
 */
export async function resetTutorials(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const state = await TutorialsDao.incrementEpoch(user_id);
		res.json(state);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * POST /users/me/tutorials/:tutorial_key/status
 * @tag Tutorials
 * @summary Set a tutorial status for the authenticated user
 * @description Upserts user_tutorials for the current epoch and given tutorial key.
 * @operationId setTutorialStatus
 * @bodyDescription Tutorial status payload
 * @bodyContent {SetTutorialStatusBody} application/json
 * @bodyRequired
 * @response 200 - Tutorial status updated
 * @responseContent {UserTutorialBase} 200.application/json
 * @prisma_model tutorial
 * @prisma_model user_tutorials
 */
export async function setTutorialStatus(
	req: ValidatedRequest<SetTutorialStatusBody, { tutorial_key: string }>,
	res: Response
): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		const { tutorial_key } = req.params as { tutorial_key: string };
		const { status, versionSeen } = req.body;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		if (!tutorial_key || !status || !['NOT_SEEN', 'COMPLETED', 'DISMISSED'].includes(status)) {
			res.status(400).json({ error: 'tutorial_key and valid status are required' });
			return;
		}
		const link: UserTutorialBase = await TutorialsDao.setTutorialStatus(user_id, tutorial_key, status, versionSeen);
		res.json(link);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { listTutorials, resetTutorials, setTutorialStatus };
