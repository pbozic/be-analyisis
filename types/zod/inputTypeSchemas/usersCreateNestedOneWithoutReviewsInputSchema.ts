import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReviewsInputSchema } from './usersCreateWithoutReviewsInputSchema';
import { usersUncheckedCreateWithoutReviewsInputSchema } from './usersUncheckedCreateWithoutReviewsInputSchema';
import { usersCreateOrConnectWithoutReviewsInputSchema } from './usersCreateOrConnectWithoutReviewsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutReviewsInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutReviewsInputSchema),z.lazy(() => usersUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutReviewsInputSchema;
