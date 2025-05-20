import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutCategoryInputSchema } from './wordsCreateWithoutCategoryInputSchema';
import { wordsUncheckedCreateWithoutCategoryInputSchema } from './wordsUncheckedCreateWithoutCategoryInputSchema';
import { wordsCreateOrConnectWithoutCategoryInputSchema } from './wordsCreateOrConnectWithoutCategoryInputSchema';
import { wordsUpsertWithWhereUniqueWithoutCategoryInputSchema } from './wordsUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { wordsCreateManyCategoryInputEnvelopeSchema } from './wordsCreateManyCategoryInputEnvelopeSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithWhereUniqueWithoutCategoryInputSchema } from './wordsUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { wordsUpdateManyWithWhereWithoutCategoryInputSchema } from './wordsUpdateManyWithWhereWithoutCategoryInputSchema';
import { wordsScalarWhereInputSchema } from './wordsScalarWhereInputSchema';

export const wordsUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.wordsUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => wordsCreateWithoutCategoryInputSchema),z.lazy(() => wordsCreateWithoutCategoryInputSchema).array(),z.lazy(() => wordsUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => wordsUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wordsCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => wordsCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => wordsUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => wordsUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => wordsCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => wordsUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => wordsUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => wordsUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => wordsUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => wordsScalarWhereInputSchema),z.lazy(() => wordsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default wordsUncheckedUpdateManyWithoutCategoryNestedInputSchema;
