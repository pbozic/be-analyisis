import type { Business } from './Business.js';
import type { BusinessToType } from './BusinessToType.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessType = {
	type_id: string;
	type: string;
	created_at: string;
	updated_at: string;
	businesses: BusinessToType[];
};
