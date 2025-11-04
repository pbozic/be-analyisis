// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { TUTORIAL_STATUS } from '@prisma/client';

import type { User } from './User.js';
import type { Tutorial } from './Tutorial.js';

export type UserTutorial = {
	user_id: string;
	tutorial_id: string;
	epoch: number;
	status: TUTORIAL_STATUS;
	versionSeen: number;
	firstSeenAt?: string | null;
	completedAt?: string | null;
	dismissedAt?: string | null;
	user: User;
	tutorial: Tutorial;
};
