import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateManyDaily_meal_businessInputSchema } from './delivery_driversCreateManyDaily_meal_businessInputSchema';

export const delivery_driversCreateManyDaily_meal_businessInputEnvelopeSchema: z.ZodType<Prisma.delivery_driversCreateManyDaily_meal_businessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => delivery_driversCreateManyDaily_meal_businessInputSchema),z.lazy(() => delivery_driversCreateManyDaily_meal_businessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default delivery_driversCreateManyDaily_meal_businessInputEnvelopeSchema;
