import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataCreateManySettlementInputSchema } from './weather_dataCreateManySettlementInputSchema';

export const weather_dataCreateManySettlementInputEnvelopeSchema: z.ZodType<Prisma.weather_dataCreateManySettlementInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => weather_dataCreateManySettlementInputSchema),z.lazy(() => weather_dataCreateManySettlementInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default weather_dataCreateManySettlementInputEnvelopeSchema;
