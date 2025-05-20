import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const settlementsCreateManyMunicipalityInputSchema: z.ZodType<Prisma.settlementsCreateManyMunicipalityInput> = z.object({
  settlement_id: z.string().uuid().optional(),
  name: z.string(),
  eid_naselje: z.string().optional().nullable(),
  feature_id: z.string().optional().nullable(),
  geojson: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default settlementsCreateManyMunicipalityInputSchema;
