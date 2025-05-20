import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { weather_dataUncheckedCreateNestedManyWithoutSettlementInputSchema } from './weather_dataUncheckedCreateNestedManyWithoutSettlementInputSchema';

export const settlementsUncheckedCreateWithoutMunicipalityInputSchema: z.ZodType<Prisma.settlementsUncheckedCreateWithoutMunicipalityInput> = z.object({
  settlement_id: z.string().uuid().optional(),
  name: z.string(),
  eid_naselje: z.string().optional().nullable(),
  feature_id: z.string().optional().nullable(),
  geojson: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  weather_data: z.lazy(() => weather_dataUncheckedCreateNestedManyWithoutSettlementInputSchema).optional()
}).strict();

export default settlementsUncheckedCreateWithoutMunicipalityInputSchema;
