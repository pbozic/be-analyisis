import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BigIntWithAggregatesFilterSchema } from './BigIntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const weather_dataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.weather_dataScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => weather_dataScalarWhereWithAggregatesInputSchema),
					z.lazy(() => weather_dataScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => weather_dataScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => weather_dataScalarWhereWithAggregatesInputSchema),
					z.lazy(() => weather_dataScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			weather_data_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			time_epoch: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional(),
			time: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			temp_c: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			is_day: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			condition_text: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			condition_icon: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			condition_code: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			wind_kph: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			wind_degree: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			wind_dir: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			pressure_mb: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			precip_mm: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			snow_cm: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			humidity: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			cloud: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			feelslike_c: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			windchill_c: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			heatindex_c: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			dewpoint_c: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			will_it_rain: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			chance_of_rain: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			will_it_snow: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			chance_of_snow: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			vis_km: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			gust_kph: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			uv: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			icon: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			municipalities_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			settlement_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
		})
		.strict();

export default weather_dataScalarWhereWithAggregatesInputSchema;
