// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import type { Municipality } from '../regions/Municipality.js';

export type Settlement = {
	settlement_id: string;
	name: string;
	municipalities_id: string;
	eid_naselje?: string | null;
	feature_id?: string | null;
	geojson: unknown;
	created_at: string;
	updated_at: string;
	municipality: Municipality;
	weather_data: Municipality[];
	geom_generated?: unknown | null;
};
