import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { weather_dataIncludeSchema } from '../inputTypeSchemas/weather_dataIncludeSchema';
import { weather_dataWhereUniqueInputSchema } from '../inputTypeSchemas/weather_dataWhereUniqueInputSchema';
import { municipalitiesArgsSchema } from '../outputTypeSchemas/municipalitiesArgsSchema';
import { settlementsArgsSchema } from '../outputTypeSchemas/settlementsArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const weather_dataSelectSchema: z.ZodType<Prisma.weather_dataSelect> = z
	.object({
		weather_data_id: z.boolean().optional(),
		time_epoch: z.boolean().optional(),
		time: z.boolean().optional(),
		temp_c: z.boolean().optional(),
		is_day: z.boolean().optional(),
		condition_text: z.boolean().optional(),
		condition_icon: z.boolean().optional(),
		condition_code: z.boolean().optional(),
		wind_kph: z.boolean().optional(),
		wind_degree: z.boolean().optional(),
		wind_dir: z.boolean().optional(),
		pressure_mb: z.boolean().optional(),
		precip_mm: z.boolean().optional(),
		snow_cm: z.boolean().optional(),
		humidity: z.boolean().optional(),
		cloud: z.boolean().optional(),
		feelslike_c: z.boolean().optional(),
		windchill_c: z.boolean().optional(),
		heatindex_c: z.boolean().optional(),
		dewpoint_c: z.boolean().optional(),
		will_it_rain: z.boolean().optional(),
		chance_of_rain: z.boolean().optional(),
		will_it_snow: z.boolean().optional(),
		chance_of_snow: z.boolean().optional(),
		vis_km: z.boolean().optional(),
		gust_kph: z.boolean().optional(),
		uv: z.boolean().optional(),
		icon: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		municipalities_id: z.boolean().optional(),
		settlement_id: z.boolean().optional(),
		municipality: z.union([z.boolean(), z.lazy(() => municipalitiesArgsSchema)]).optional(),
		settlement: z.union([z.boolean(), z.lazy(() => settlementsArgsSchema)]).optional(),
	})
	.strict();

export const weather_dataFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.weather_dataFindUniqueOrThrowArgs> = z
	.object({
		select: weather_dataSelectSchema.optional(),
		include: weather_dataIncludeSchema.optional(),
		where: weather_dataWhereUniqueInputSchema,
	})
	.strict();

export default weather_dataFindUniqueOrThrowArgsSchema;
