import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const weather_dataAvgOrderByAggregateInputSchema: z.ZodType<Prisma.weather_dataAvgOrderByAggregateInput> = z
	.object({
		time_epoch: z.lazy(() => SortOrderSchema).optional(),
		temp_c: z.lazy(() => SortOrderSchema).optional(),
		condition_code: z.lazy(() => SortOrderSchema).optional(),
		wind_kph: z.lazy(() => SortOrderSchema).optional(),
		wind_degree: z.lazy(() => SortOrderSchema).optional(),
		pressure_mb: z.lazy(() => SortOrderSchema).optional(),
		precip_mm: z.lazy(() => SortOrderSchema).optional(),
		snow_cm: z.lazy(() => SortOrderSchema).optional(),
		humidity: z.lazy(() => SortOrderSchema).optional(),
		cloud: z.lazy(() => SortOrderSchema).optional(),
		feelslike_c: z.lazy(() => SortOrderSchema).optional(),
		windchill_c: z.lazy(() => SortOrderSchema).optional(),
		heatindex_c: z.lazy(() => SortOrderSchema).optional(),
		dewpoint_c: z.lazy(() => SortOrderSchema).optional(),
		chance_of_rain: z.lazy(() => SortOrderSchema).optional(),
		chance_of_snow: z.lazy(() => SortOrderSchema).optional(),
		vis_km: z.lazy(() => SortOrderSchema).optional(),
		gust_kph: z.lazy(() => SortOrderSchema).optional(),
		uv: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default weather_dataAvgOrderByAggregateInputSchema;
