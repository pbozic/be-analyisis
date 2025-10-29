import { randomUUID } from 'crypto';

import type { tutorial as TutorialModel, user_tutorials as UserTutorialsModel } from '@prisma/client';

import prisma from '../prisma/prisma.js';
/**
 * Get or create tutorial state for a user
 *
 * @param {string} user_id - The ID of the user.
 * @returns {Promise<object>} The tutorial state.
 */
export async function getOrCreateState(user_id: string) {
	let state = await prisma.user_tutorial_state.findUnique({ where: { user_id } });
	if (!state) {
		state = await prisma.user_tutorial_state.create({ data: { id: randomUUID(), user_id } });
	}
	return state;
}
/**
 * List tutorials with user's status
 *
 * @param {string} user_id - The ID of the user.
 * @returns {Promise<object[]>} The list of tutorials with their status.
 */
export async function listTutorialsWithStatus(user_id: string) {
	const state = await getOrCreateState(user_id);
	const epoch = state.epoch;
	// Fetch all tutorials and left join user_tutorials by current epoch
	const tutorials: TutorialModel[] = await prisma.tutorial.findMany({ orderBy: { createdAt: 'asc' } });
	const links: UserTutorialsModel[] = await prisma.user_tutorials.findMany({
		where: { user_id, epoch },
	});
	const byTutorial: Record<string, UserTutorialsModel> = {};
	for (const l of links) byTutorial[l.tutorial_id] = l;
	return tutorials.map((t: TutorialModel) => ({
		...t,
		status: byTutorial[t.tutorial_id]?.status || 'NOT_SEEN',
		versionSeen: byTutorial[t.tutorial_id]?.versionSeen || 0,
		firstSeenAt: byTutorial[t.tutorial_id]?.firstSeenAt || null,
		completedAt: byTutorial[t.tutorial_id]?.completedAt || null,
		dismissedAt: byTutorial[t.tutorial_id]?.dismissedAt || null,
	}));
}
/**
 * Set tutorial status for a user
 *
 * @param {string} user_id - The ID of the user.
 * @param {string} tutorial_key - The key of the tutorial.
 * @param {'NOT_SEEN' | 'COMPLETED' | 'DISMISSED'} status - The status to set.
 * @param {number | null} versionSeen - The version seen by the user.
 * @returns {Promise<object>} The updated tutorial status.
 */
export async function setTutorialStatus(
	user_id: string,
	tutorial_key: string,
	status: 'NOT_SEEN' | 'COMPLETED' | 'DISMISSED',
	versionSeen?: number | null
) {
	const state = await getOrCreateState(user_id);
	const epoch = state.epoch;
	const tutorial = await prisma.tutorial.findUnique({ where: { key: tutorial_key } });
	if (!tutorial) throw new Error('Tutorial not found');
	const now = new Date();
	return prisma.user_tutorials.upsert({
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
}
/**
 * Increment tutorial epoch for a user
 *
 * @param {string} user_id - The ID of the user.
 * @returns {Promise<object>} The updated tutorial state.
 */
export async function incrementEpoch(user_id: string) {
	const state = await getOrCreateState(user_id);
	return prisma.user_tutorial_state.update({
		where: { user_id },
		data: { epoch: state.epoch + 1 },
	});
}

export default { getOrCreateState, listTutorialsWithStatus, setTutorialStatus, incrementEpoch };
