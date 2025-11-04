// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { Word } from './Word.js';

export type WordBundle = {
	id: string;
	name: string;
	description?: string | null;
	words: Word[];
	created_at: Date;
};
