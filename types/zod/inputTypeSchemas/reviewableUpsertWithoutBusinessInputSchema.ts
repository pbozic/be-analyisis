import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableUpdateWithoutBusinessInputSchema } from './reviewableUpdateWithoutBusinessInputSchema';
import { reviewableUncheckedUpdateWithoutBusinessInputSchema } from './reviewableUncheckedUpdateWithoutBusinessInputSchema';
import { reviewableCreateWithoutBusinessInputSchema } from './reviewableCreateWithoutBusinessInputSchema';
import { reviewableUncheckedCreateWithoutBusinessInputSchema } from './reviewableUncheckedCreateWithoutBusinessInputSchema';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';

export const reviewableUpsertWithoutBusinessInputSchema: z.ZodType<Prisma.reviewableUpsertWithoutBusinessInput> = z.object({
  update: z.union([ z.lazy(() => reviewableUpdateWithoutBusinessInputSchema),z.lazy(() => reviewableUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => reviewableCreateWithoutBusinessInputSchema),z.lazy(() => reviewableUncheckedCreateWithoutBusinessInputSchema) ]),
  where: z.lazy(() => reviewableWhereInputSchema).optional()
}).strict();

export default reviewableUpsertWithoutBusinessInputSchema;
