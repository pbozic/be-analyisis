import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const weather_dataCountOrderByAggregateInputSchema: z.ZodType<Prisma.weather_dataCountOrderByAggregateInput> = z.object({
  weather_data_id: z.lazy(() => SortOrderSchema).optional(),
  time_epoch: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  temp_c: z.lazy(() => SortOrderSchema).optional(),
  is_day: z.lazy(() => SortOrderSchema).optional(),
  condition_text: z.lazy(() => SortOrderSchema).optional(),
  condition_icon: z.lazy(() => SortOrderSchema).optional(),
  condition_code: z.lazy(() => SortOrderSchema).optional(),
  wind_kph: z.lazy(() => SortOrderSchema).optional(),
  wind_degree: z.lazy(() => SortOrderSchema).optional(),
  wind_dir: z.lazy(() => SortOrderSchema).optional(),
  pressure_mb: z.lazy(() => SortOrderSchema).optional(),
  precip_mm: z.lazy(() => SortOrderSchema).optional(),
  snow_cm: z.lazy(() => SortOrderSchema).optional(),
  humidity: z.lazy(() => SortOrderSchema).optional(),
  cloud: z.lazy(() => SortOrderSchema).optional(),
  feelslike_c: z.lazy(() => SortOrderSchema).optional(),
  windchill_c: z.lazy(() => SortOrderSchema).optional(),
  heatindex_c: z.lazy(() => SortOrderSchema).optional(),
  dewpoint_c: z.lazy(() => SortOrderSchema).optional(),
  will_it_rain: z.lazy(() => SortOrderSchema).optional(),
  chance_of_rain: z.lazy(() => SortOrderSchema).optional(),
  will_it_snow: z.lazy(() => SortOrderSchema).optional(),
  chance_of_snow: z.lazy(() => SortOrderSchema).optional(),
  vis_km: z.lazy(() => SortOrderSchema).optional(),
  gust_kph: z.lazy(() => SortOrderSchema).optional(),
  uv: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  municipalities_id: z.lazy(() => SortOrderSchema).optional(),
  settlement_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default weather_dataCountOrderByAggregateInputSchema;
