import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReviewsInputSchema } from './usersCreateWithoutReviewsInputSchema';
import { usersUncheckedCreateWithoutReviewsInputSchema } from './usersUncheckedCreateWithoutReviewsInputSchema';
import { usersCreateOrConnectWithoutReviewsInputSchema } from './usersCreateOrConnectWithoutReviewsInputSchema';
import { usersUpsertWithoutReviewsInputSchema } from './usersUpsertWithoutReviewsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutReviewsInputSchema } from './usersUpdateToOneWithWhereWithoutReviewsInputSchema';
import { usersUpdateWithoutReviewsInputSchema } from './usersUpdateWithoutReviewsInputSchema';
import { usersUncheckedUpdateWithoutReviewsInputSchema } from './usersUncheckedUpdateWithoutReviewsInputSchema';

export const usersUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutReviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutReviewsInputSchema),z.lazy(() => usersUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutReviewsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutReviewsInputSchema),z.lazy(() => usersUpdateWithoutReviewsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutReviewsInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutReviewsNestedInputSchema;
