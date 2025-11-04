import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Municipality } from '../regions/Municipality.js';
import type { Settlement } from './Settlement.js';
import { MunicipalityResponseSchema } from '../regions/Municipality';
import { SettlementResponseSchema } from './Settlement';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export const CreateWeatherDataSchema = z
	.object({
		weather_data_id: z.string().uuid(),
		time_epoch: z.number(),
		time: z.unknown(),
		temp_c: z.number(),
		is_day: z.boolean(),
		condition_text: z.string(),
		condition_icon: z.string(),
		condition_code: z.number(),
		wind_kph: z.number(),
		wind_degree: z.number(),
		wind_dir: z.string(),
		pressure_mb: z.number(),
		precip_mm: z.number(),
		snow_cm: z.number(),
		humidity: z.number(),
		cloud: z.number(),
		feelslike_c: z.number(),
		windchill_c: z.number(),
		heatindex_c: z.number(),
		dewpoint_c: z.number(),
		will_it_rain: z.boolean(),
		chance_of_rain: z.number(),
		will_it_snow: z.boolean(),
		chance_of_snow: z.number(),
		vis_km: z.number(),
		gust_kph: z.number(),
		uv: z.number(),
		icon: z.string(),
		municipalities_id: z.string().uuid().nullable().optional(),
		settlement_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateWeatherData');

export type CreateWeatherDataInput = z.infer<typeof CreateWeatherDataSchema>;

export const UpdateWeatherDataSchema = CreateWeatherDataSchema.partial().openapi('UpdateWeatherData');
export type UpdateWeatherDataInput = z.infer<typeof UpdateWeatherDataSchema>;

export const WeatherDataResponseSchema = z
	.object({
		weather_data_id: z.string(),
		time_epoch: z.number(),
		time: z.string().datetime(),
		temp_c: z.number(),
		is_day: z.boolean(),
		condition_text: z.string(),
		condition_icon: z.string(),
		condition_code: z.number(),
		wind_kph: z.number(),
		wind_degree: z.number(),
		wind_dir: z.string(),
		pressure_mb: z.number(),
		precip_mm: z.number(),
		snow_cm: z.number(),
		humidity: z.number(),
		cloud: z.number(),
		feelslike_c: z.number(),
		windchill_c: z.number(),
		heatindex_c: z.number(),
		dewpoint_c: z.number(),
		will_it_rain: z.boolean(),
		chance_of_rain: z.number(),
		will_it_snow: z.boolean(),
		chance_of_snow: z.number(),
		vis_km: z.number(),
		gust_kph: z.number(),
		uv: z.number(),
		icon: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		municipalities_id: z.string().nullable().optional(),
		municipality: MunicipalityResponseSchema.nullable().optional(),
		settlement_id: z.string().nullable().optional(),
		settlement: SettlementResponseSchema.nullable().optional(),
	})
	.openapi('WeatherDataResponse');

export type WeatherDataResponse = z.infer<typeof WeatherDataResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateWeatherData', CreateWeatherDataSchema);
	registry.register('UpdateWeatherData', UpdateWeatherDataSchema);
	registry.register('WeatherDataResponse', WeatherDataResponseSchema);
}

export type WeatherData = {
	weather_data_id: string;
	time_epoch: number;
	time: Date;
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
	created_at: Date;
	updated_at: Date;
	municipalities_id?: string | null;
	municipality?: Municipality | null;
	settlement_id?: string | null;
	settlement?: Settlement | null;
};
