// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { User } from './User.js';
import type { Driver } from '../drivers/Driver.js';

export type UserFavoriteDriver = {
	user_favorite_drivers_id: string;
	user_id: string;
	driver_id: string;
	created_at: string;
	updated_at: string;
	users: User;
	drivers: Driver;
};
