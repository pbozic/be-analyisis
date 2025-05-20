import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { weather_dataCountOrderByAggregateInputSchema } from './weather_dataCountOrderByAggregateInputSchema';
import { weather_dataAvgOrderByAggregateInputSchema } from './weather_dataAvgOrderByAggregateInputSchema';
import { weather_dataMaxOrderByAggregateInputSchema } from './weather_dataMaxOrderByAggregateInputSchema';
import { weather_dataMinOrderByAggregateInputSchema } from './weather_dataMinOrderByAggregateInputSchema';
import { weather_dataSumOrderByAggregateInputSchema } from './weather_dataSumOrderByAggregateInputSchema';

export const weather_dataOrderByWithAggregationInputSchema: z.ZodType<Prisma.weather_dataOrderByWithAggregationInput> = z.object({
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
  municipalities_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  settlement_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => weather_dataCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => weather_dataAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => weather_dataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => weather_dataMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => weather_dataSumOrderByAggregateInputSchema).optional()
}).strict();

export default weather_dataOrderByWithAggregationInputSchema;
