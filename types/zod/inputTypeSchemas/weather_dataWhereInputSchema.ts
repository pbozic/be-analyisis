import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { MunicipalitiesNullableRelationFilterSchema } from './MunicipalitiesNullableRelationFilterSchema';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';
import { SettlementsNullableRelationFilterSchema } from './SettlementsNullableRelationFilterSchema';
import { settlementsWhereInputSchema } from './settlementsWhereInputSchema';

export const weather_dataWhereInputSchema: z.ZodType<Prisma.weather_dataWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => weather_dataWhereInputSchema), z.lazy(() => weather_dataWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => weather_dataWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => weather_dataWhereInputSchema), z.lazy(() => weather_dataWhereInputSchema).array()])
			.optional(),
		weather_data_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		time_epoch: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
		time: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		temp_c: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		is_day: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		condition_text: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		condition_icon: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		condition_code: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		wind_kph: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		wind_degree: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		wind_dir: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		pressure_mb: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		precip_mm: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		snow_cm: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		humidity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		cloud: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		feelslike_c: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		windchill_c: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		heatindex_c: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		dewpoint_c: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		will_it_rain: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		chance_of_rain: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		will_it_snow: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		chance_of_snow: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		vis_km: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		gust_kph: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		uv: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		icon: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		municipalities_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		settlement_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		municipality: z
			.union([
				z.lazy(() => MunicipalitiesNullableRelationFilterSchema),
				z.lazy(() => municipalitiesWhereInputSchema),
			])
			.optional()
			.nullable(),
		settlement: z
			.union([z.lazy(() => SettlementsNullableRelationFilterSchema), z.lazy(() => settlementsWhereInputSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export default weather_dataWhereInputSchema;
