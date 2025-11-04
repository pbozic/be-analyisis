import type { Municipality } from '../regions/Municipality.js';
import type { Settlement } from './Settlement.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export type WeatherData = {
	weather_data_id: string;
	time_epoch: string;
	time: string;
	temp_c: number;
	is_day: boolean;
	condition_text: string;
	condition_icon: string;
	condition_code: number;
	wind_kph: number;
	wind_degree: number;
	wind_dir: string;
	pressure_mb: number;
	precip_mm: number;
	snow_cm: number;
	humidity: number;
	cloud: number;
	feelslike_c: number;
	windchill_c: number;
	heatindex_c: number;
	dewpoint_c: number;
	will_it_rain: boolean;
	chance_of_rain: number;
	will_it_snow: boolean;
	chance_of_snow: number;
	vis_km: number;
	gust_kph: number;
	uv: number;
	icon: string;
	created_at: string;
	updated_at: string;
	municipalities_id?: string | null;
	municipality?: Municipality | null;
	settlement_id?: string | null;
	settlement?: Settlement | null;
};
