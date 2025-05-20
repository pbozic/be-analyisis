import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const reviewableUpdateManyMutationInputSchema: z.ZodType<Prisma.reviewableUpdateManyMutationInput> = z.object({
  reviewable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default reviewableUpdateManyMutationInputSchema;
