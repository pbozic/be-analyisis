import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const reviewableUncheckedUpdateManyInputSchema: z.ZodType<Prisma.reviewableUncheckedUpdateManyInput> = z.object({
  reviewable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default reviewableUncheckedUpdateManyInputSchema;
