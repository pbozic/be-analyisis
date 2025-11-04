import type { user_favorite_service_links } from '@prisma/client';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type ServiceLink = {
	id: string;
	name: string;
	created_at: string;
	updated_at: string;
	favorited_by: user_favorite_service_links[];
};
