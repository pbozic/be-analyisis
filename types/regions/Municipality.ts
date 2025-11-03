// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { drivers, settlements, weather_data } from '@prisma/client';

export type Municipality = {
	municipalities_id: string;
	name: string;
	geojson: unknown;
	requires_license: boolean;
	gis_sifra?: string | null;
	eid_obcina?: string | null;
	feature_id?: string | null;
	created_at: string;
	updated_at: string;
	driver_municipalities: drivers[];
	settlements: weather_data[];
	weather_data: settlements[];
	geom_generated?: unknown | null;
};
