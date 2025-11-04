// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { MODULE } from '@prisma/client';

import type { User } from './User.js';
import type { Business } from '../business/Business.js';

export type UserFavoriteBusiness = {
	user_favorite_businesses_id: string;
	user_id: string;
	business_id: string;
	module: MODULE;
	created_at: Date;
	updated_at: Date;
	users: User;
	businesses: Business;
};
