import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutReviewableInputSchema } from './businessCreateWithoutReviewableInputSchema';
import { businessUncheckedCreateWithoutReviewableInputSchema } from './businessUncheckedCreateWithoutReviewableInputSchema';

export const businessCreateOrConnectWithoutReviewableInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutReviewableInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutReviewableInputSchema),z.lazy(() => businessUncheckedCreateWithoutReviewableInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutReviewableInputSchema;
