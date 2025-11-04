import type { User } from './User.js';
import type { UserTutorial } from './UserTutorial.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Tutorial = {
	tutorial_id: string;
	key: string;
	title: string;
	version: number;
	mandatory: boolean;
	createdAt: string;
	retiredAt?: string | null;
	user_tutorials: UserTutorial[];
};
