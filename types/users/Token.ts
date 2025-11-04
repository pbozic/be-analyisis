import { TokenType } from '@prisma/client';

import type { User } from './User.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Token = {
	token_id: string;
	user_id: string;
	type: TokenType;
	token: string;
	expires_at: Date;
	created_at: Date;
	updated_at: Date;
	active: boolean;
	users: User;
};
