import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const weather_dataUncheckedCreateWithoutMunicipalityInputSchema: z.ZodType<Prisma.weather_dataUncheckedCreateWithoutMunicipalityInput> = z.object({
  weather_data_id: z.string().uuid().optional(),
  time_epoch: z.bigint(),
  time: z.coerce.date(),
  temp_c: z.number(),
  is_day: z.boolean(),
  condition_text: z.string(),
  condition_icon: z.string(),
  condition_code: z.number().int(),
  wind_kph: z.number(),
  wind_degree: z.number().int(),
  wind_dir: z.string(),
  pressure_mb: z.number(),
  precip_mm: z.number(),
  snow_cm: z.number(),
  humidity: z.number().int(),
  cloud: z.number().int(),
  feelslike_c: z.number(),
  windchill_c: z.number(),
  heatindex_c: z.number(),
  dewpoint_c: z.number(),
  will_it_rain: z.boolean(),
  chance_of_rain: z.number().int(),
  will_it_snow: z.boolean(),
  chance_of_snow: z.number().int(),
  vis_km: z.number(),
  gust_kph: z.number(),
  uv: z.number(),
  icon: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  settlement_id: z.string().optional().nullable()
}).strict();

export default weather_dataUncheckedCreateWithoutMunicipalityInputSchema;
