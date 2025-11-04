import type { Translatable } from './Translatable.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Translation = {
	translations_id: string;
	translatable_id: string;
	translatable: Translatable;
	field?: string | null;
	language: string;
	translation: string;
	created_at: string;
	updated_at: string;
};
