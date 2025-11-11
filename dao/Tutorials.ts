import { TUTORIAL_STATUS } from '@prisma/client';

import {
	TutorialBase,
	TutorialDetail,
	UserTutorialState,
	UserTutorialBase,
} from '../schemas/dto/Tutorials/tutorials.dto.js';
import {
	toTutorialDetail,
	toUserTutorialState,
	toUserTutorialBase,
} from '../schemas/dto/Tutorials/tutorials.mappers.js';
import prisma from '../prisma/prisma.js';
/**
 * Get or create tutorial state for a user
 *
 * @param {string} user_id - The ID of the user.
 * @returns {Promise<UserTutorialState>} The tutorial state.
 */
export async function getOrCreateState(user_id: string): Promise<UserTutorialState> {
	let state = await prisma.user_tutorial_state.findUnique({ where: { user_id } });
	if (!state) {
		state = await prisma.user_tutorial_state.create({ data: { user_id } });
	}
	return toUserTutorialState(state);
}
/**
 * List tutorials with user's status
 *
 * @param {string} user_id - The ID of the user.
 * @returns {Promise<TutorialDetail[]>} The list of tutorials with their status.
 */
export async function listTutorialsWithStatus(user_id: string): Promise<TutorialDetail[]> {
	const state = await getOrCreateState(user_id);
	const epoch = state.epoch;
	// Fetch all tutorials and left join user_tutorials by current epoch
	const tutorials: TutorialBase[] = await prisma.tutorial.findMany({ orderBy: { createdAt: 'asc' } });
	const links: UserTutorialBase[] = await prisma.user_tutorials.findMany({ where: { user_id, epoch } });
	const byTutorial: Record<string, UserTutorialBase> = {};
	for (const l of links) byTutorial[l.tutorial_id] = l;

	return tutorials.map((t: TutorialBase) => {
		const link = byTutorial[t.tutorial_id];
		const combined = {
			tutorial_id: t.tutorial_id,
			key: t.key,
			title: t.title,
			version: t.version,
			mandatory: t.mandatory,
			createdAt: t.createdAt,
			retiredAt: t.retiredAt,
			status: link?.status,
			versionSeen: link?.versionSeen,
			firstSeenAt: link?.firstSeenAt,
			completedAt: link?.completedAt,
			dismissedAt: link?.dismissedAt,
		};
		return toTutorialDetail(combined);
	});
}
/**
 * Set tutorial status for a user
 *
 * @param {string} user_id - The ID of the user.
 * @param {string} tutorial_key - The key of the tutorial.
 * @param {TUTORIAL_STATUS} status - The status to set.
 * @param {number | null} versionSeen - The version seen by the user.
 * @returns {Promise<UserTutorialBase>} The updated tutorial status.
 */
export async function setTutorialStatus(
	user_id: string,
	tutorial_key: string,
	status: TUTORIAL_STATUS,
	versionSeen?: number | null
): Promise<UserTutorialBase> {
	const state = await getOrCreateState(user_id);
	const epoch = state.epoch;
	const tutorial = await prisma.tutorial.findUnique({ where: { key: tutorial_key } });
	if (!tutorial) throw new Error('Tutorial not found');
	const now = new Date();
	const res = await prisma.user_tutorials.upsert({
		where: { user_id_tutorial_id_epoch: { user_id, tutorial_id: tutorial.tutorial_id, epoch } },
		create: {
			user_id,
			tutorial_id: tutorial.tutorial_id,
			epoch,
			status,
			versionSeen: versionSeen ?? tutorial.version,
			firstSeenAt: status === 'NOT_SEEN' ? now : now,
			completedAt: status === 'COMPLETED' ? now : null,
			dismissedAt: status === 'DISMISSED' ? now : null,
		},
		update: {
			status,
			versionSeen: versionSeen ?? tutorial.version,
			firstSeenAt: { set: now },
			completedAt: status === 'COMPLETED' ? now : null,
			dismissedAt: status === 'DISMISSED' ? now : null,
		},
	});

	return toUserTutorialBase(res);
}
/**
 * Increment tutorial epoch for a user
 *
 * @param {string} user_id - The ID of the user.
 * @returns {Promise<UserTutorialState>} The updated tutorial state.
 */
export async function incrementEpoch(user_id: string): Promise<UserTutorialState> {
	const state = await getOrCreateState(user_id);
	const updated = await prisma.user_tutorial_state.update({ where: { user_id }, data: { epoch: state.epoch + 1 } });
	return toUserTutorialState(updated);
}

export default { getOrCreateState, listTutorialsWithStatus, setTutorialStatus, incrementEpoch };
