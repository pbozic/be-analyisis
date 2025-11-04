import type { User } from './User.js';
import type { UserFavoriteServiceLink } from './UserFavoriteServiceLink.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type ServiceLink = {
	id: string;
	name: string;
	created_at: Date;
	updated_at: Date;
	favorited_by: UserFavoriteServiceLink[];
};
