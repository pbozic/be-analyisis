import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutReviewableInputSchema } from './businessUpdateWithoutReviewableInputSchema';
import { businessUncheckedUpdateWithoutReviewableInputSchema } from './businessUncheckedUpdateWithoutReviewableInputSchema';

export const businessUpdateWithWhereUniqueWithoutReviewableInputSchema: z.ZodType<Prisma.businessUpdateWithWhereUniqueWithoutReviewableInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => businessUpdateWithoutReviewableInputSchema),z.lazy(() => businessUncheckedUpdateWithoutReviewableInputSchema) ]),
}).strict();

export default businessUpdateWithWhereUniqueWithoutReviewableInputSchema;
