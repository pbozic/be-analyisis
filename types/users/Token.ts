// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { TokenType } from '@prisma/client';

import type { User } from './User.js';

export type Token = {
	token_id: string;
	user_id: string;
	type: TokenType;
	token: string;
	expires_at: string;
	created_at: string;
	updated_at: string;
	active: boolean;
	users: User;
};
