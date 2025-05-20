import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { municipalitiesCreateNestedOneWithoutSettlementsInputSchema } from './municipalitiesCreateNestedOneWithoutSettlementsInputSchema';

export const settlementsCreateWithoutWeather_dataInputSchema: z.ZodType<Prisma.settlementsCreateWithoutWeather_dataInput> = z.object({
  settlement_id: z.string().uuid().optional(),
  name: z.string(),
  eid_naselje: z.string().optional().nullable(),
  feature_id: z.string().optional().nullable(),
  geojson: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  municipality: z.lazy(() => municipalitiesCreateNestedOneWithoutSettlementsInputSchema)
}).strict();

export default settlementsCreateWithoutWeather_dataInputSchema;
