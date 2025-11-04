import type { user_tutorials } from '@prisma/client';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Tutorial = {
	tutorial_id: string;
	key: string;
	title: string;
	version: number;
	mandatory: boolean;
	createdAt: string;
	retiredAt?: string | null;
	user_tutorials: user_tutorials[];
};
