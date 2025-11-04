// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { User } from './User.js';
import type { ServiceLink } from './ServiceLink.js';

export type UserFavoriteServiceLink = {
	id: string;
	user_id: string;
	service_id: string;
	created_at: string;
	updated_at: string;
	order_index: number;
	users: User;
	services: ServiceLink;
};
