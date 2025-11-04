import type { Driver } from '../drivers/Driver.js';
import type { Settlement } from '../weather/Settlement.js';
import type { WeatherData } from '../weather/WeatherData.js';
import type { DriverMunicipality } from './DriverMunicipality.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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
	driver_municipalities: DriverMunicipality[];
	settlements: Settlement[];
	weather_data: WeatherData[];
	geom_generated?: unknown | null;
};
