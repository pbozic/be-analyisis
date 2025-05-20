import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';
import { businessUpdateManyMutationInputSchema } from './businessUpdateManyMutationInputSchema';
import { businessUncheckedUpdateManyWithoutReviewableInputSchema } from './businessUncheckedUpdateManyWithoutReviewableInputSchema';

export const businessUpdateManyWithWhereWithoutReviewableInputSchema: z.ZodType<Prisma.businessUpdateManyWithWhereWithoutReviewableInput> = z.object({
  where: z.lazy(() => businessScalarWhereInputSchema),
  data: z.union([ z.lazy(() => businessUpdateManyMutationInputSchema),z.lazy(() => businessUncheckedUpdateManyWithoutReviewableInputSchema) ]),
}).strict();

export default businessUpdateManyWithWhereWithoutReviewableInputSchema;
