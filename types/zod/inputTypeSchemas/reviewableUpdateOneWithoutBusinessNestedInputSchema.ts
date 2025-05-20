import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableCreateWithoutBusinessInputSchema } from './reviewableCreateWithoutBusinessInputSchema';
import { reviewableUncheckedCreateWithoutBusinessInputSchema } from './reviewableUncheckedCreateWithoutBusinessInputSchema';
import { reviewableCreateOrConnectWithoutBusinessInputSchema } from './reviewableCreateOrConnectWithoutBusinessInputSchema';
import { reviewableUpsertWithoutBusinessInputSchema } from './reviewableUpsertWithoutBusinessInputSchema';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';
import { reviewableUpdateToOneWithWhereWithoutBusinessInputSchema } from './reviewableUpdateToOneWithWhereWithoutBusinessInputSchema';
import { reviewableUpdateWithoutBusinessInputSchema } from './reviewableUpdateWithoutBusinessInputSchema';
import { reviewableUncheckedUpdateWithoutBusinessInputSchema } from './reviewableUncheckedUpdateWithoutBusinessInputSchema';

export const reviewableUpdateOneWithoutBusinessNestedInputSchema: z.ZodType<Prisma.reviewableUpdateOneWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => reviewableCreateWithoutBusinessInputSchema),z.lazy(() => reviewableUncheckedCreateWithoutBusinessInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => reviewableCreateOrConnectWithoutBusinessInputSchema).optional(),
  upsert: z.lazy(() => reviewableUpsertWithoutBusinessInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => reviewableWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => reviewableWhereInputSchema) ]).optional(),
  connect: z.lazy(() => reviewableWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => reviewableUpdateToOneWithWhereWithoutBusinessInputSchema),z.lazy(() => reviewableUpdateWithoutBusinessInputSchema),z.lazy(() => reviewableUncheckedUpdateWithoutBusinessInputSchema) ]).optional(),
}).strict();

export default reviewableUpdateOneWithoutBusinessNestedInputSchema;
