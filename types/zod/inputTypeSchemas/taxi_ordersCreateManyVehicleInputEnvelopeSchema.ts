import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateManyVehicleInputSchema } from './taxi_ordersCreateManyVehicleInputSchema';

export const taxi_ordersCreateManyVehicleInputEnvelopeSchema: z.ZodType<Prisma.taxi_ordersCreateManyVehicleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => taxi_ordersCreateManyVehicleInputSchema),z.lazy(() => taxi_ordersCreateManyVehicleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default taxi_ordersCreateManyVehicleInputEnvelopeSchema;
