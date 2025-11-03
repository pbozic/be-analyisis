// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { User } from './User.js';

export type Tutorial = {
	tutorial_id: string;
	key: string;
	title: string;
	version: number;
	mandatory: boolean;
	createdAt: string;
	retiredAt?: string | null;
	user_tutorials: User[];
};
