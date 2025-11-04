import type { Municipality } from '../regions/Municipality.js';
import type { WeatherData } from './WeatherData.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export type Settlement = {
	settlement_id: string;
	name: string;
	municipalities_id: string;
	eid_naselje?: string | null;
	feature_id?: string | null;
	geojson: unknown;
	created_at: Date;
	updated_at: Date;
	municipality: Municipality;
	weather_data: WeatherData[];
	geom_generated?: unknown | null;
};
