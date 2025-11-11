import type { TUTORIAL_STATUS } from '@prisma/client';

import { TutorialDetailSchema, UserTutorialStateSchema, UserTutorialBaseSchema } from './tutorials.dto.js';
import type { TutorialDetail, UserTutorialState, UserTutorialBase } from './tutorials.dto.js';

type PrismaTutorial = {
	tutorial_id: string;
	key: string;
	title: string;
	version: number;
	mandatory?: boolean;
	createdAt: string | Date;
	retiredAt?: string | Date | null;
};

export function toTutorialDetail(row: unknown): TutorialDetail {
	const t = row as PrismaTutorial & {
		status?: TUTORIAL_STATUS;
		versionSeen?: number | null;
		firstSeenAt?: string | Date | null;
		completedAt?: string | Date | null;
		dismissedAt?: string | Date | null;
	};
	return TutorialDetailSchema.parse({
		tutorial_id: t.tutorial_id,
		key: t.key,
		title: t.title,
		version: t.version,
		mandatory: t.mandatory ?? false,
		createdAt: new Date(t.createdAt).toISOString(),
		retiredAt: t.retiredAt ? new Date(t.retiredAt).toISOString() : null,
		status: t.status ?? 'NOT_SEEN',
		versionSeen: t.versionSeen ?? 0,
		firstSeenAt: t.firstSeenAt ? new Date(t.firstSeenAt).toISOString() : null,
		completedAt: t.completedAt ? new Date(t.completedAt).toISOString() : null,
		dismissedAt: t.dismissedAt ? new Date(t.dismissedAt).toISOString() : null,
	});
}

export function toUserTutorialState(row: unknown): UserTutorialState {
	const s = row as { id: string; user_id: string; epoch?: number; updatedAt: string | Date };
	return UserTutorialStateSchema.parse({
		id: s.id,
		user_id: s.user_id,
		epoch: s.epoch ?? 1,
		updatedAt: new Date(s.updatedAt).toISOString(),
	});
}

export function toUserTutorialBase(row: unknown): UserTutorialBase {
	const r = row as {
		id: string;
		user_id: string;
		tutorial_id: string;
		status?: TUTORIAL_STATUS;
		versionSeen?: number | null;
		firstSeenAt?: string | Date | null;
		completedAt?: string | Date | null;
		dismissedAt?: string | Date | null;
		epoch?: number;
	};
	return UserTutorialBaseSchema.parse({
		user_id: r.user_id,
		tutorial_id: r.tutorial_id,
		status: r.status ?? 'NOT_SEEN',
		versionSeen: r.versionSeen ?? 0,
		firstSeenAt: r.firstSeenAt ? new Date(r.firstSeenAt).toISOString() : null,
		completedAt: r.completedAt ? new Date(r.completedAt).toISOString() : null,
		dismissedAt: r.dismissedAt ? new Date(r.dismissedAt).toISOString() : null,
	});
}

export default { toTutorialDetail, toUserTutorialState, toUserTutorialBase };
