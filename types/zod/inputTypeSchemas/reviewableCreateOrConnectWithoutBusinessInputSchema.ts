import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';
import { reviewableCreateWithoutBusinessInputSchema } from './reviewableCreateWithoutBusinessInputSchema';
import { reviewableUncheckedCreateWithoutBusinessInputSchema } from './reviewableUncheckedCreateWithoutBusinessInputSchema';

export const reviewableCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.reviewableCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => reviewableWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => reviewableCreateWithoutBusinessInputSchema),z.lazy(() => reviewableUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default reviewableCreateOrConnectWithoutBusinessInputSchema;
