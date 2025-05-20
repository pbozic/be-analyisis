import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsCreateWithoutAuthorInputSchema } from './reviewsCreateWithoutAuthorInputSchema';
import { reviewsUncheckedCreateWithoutAuthorInputSchema } from './reviewsUncheckedCreateWithoutAuthorInputSchema';
import { reviewsCreateOrConnectWithoutAuthorInputSchema } from './reviewsCreateOrConnectWithoutAuthorInputSchema';
import { reviewsUpsertWithWhereUniqueWithoutAuthorInputSchema } from './reviewsUpsertWithWhereUniqueWithoutAuthorInputSchema';
import { reviewsCreateManyAuthorInputEnvelopeSchema } from './reviewsCreateManyAuthorInputEnvelopeSchema';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';
import { reviewsUpdateWithWhereUniqueWithoutAuthorInputSchema } from './reviewsUpdateWithWhereUniqueWithoutAuthorInputSchema';
import { reviewsUpdateManyWithWhereWithoutAuthorInputSchema } from './reviewsUpdateManyWithWhereWithoutAuthorInputSchema';
import { reviewsScalarWhereInputSchema } from './reviewsScalarWhereInputSchema';

export const reviewsUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.reviewsUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => reviewsCreateWithoutAuthorInputSchema),z.lazy(() => reviewsCreateWithoutAuthorInputSchema).array(),z.lazy(() => reviewsUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => reviewsUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => reviewsCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => reviewsCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => reviewsUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => reviewsUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => reviewsCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => reviewsUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => reviewsUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => reviewsUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => reviewsUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => reviewsScalarWhereInputSchema),z.lazy(() => reviewsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default reviewsUpdateManyWithoutAuthorNestedInputSchema;
