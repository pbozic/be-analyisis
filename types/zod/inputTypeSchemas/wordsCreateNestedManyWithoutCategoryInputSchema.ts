import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutCategoryInputSchema } from './wordsCreateWithoutCategoryInputSchema';
import { wordsUncheckedCreateWithoutCategoryInputSchema } from './wordsUncheckedCreateWithoutCategoryInputSchema';
import { wordsCreateOrConnectWithoutCategoryInputSchema } from './wordsCreateOrConnectWithoutCategoryInputSchema';
import { wordsCreateManyCategoryInputEnvelopeSchema } from './wordsCreateManyCategoryInputEnvelopeSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';

export const wordsCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.wordsCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => wordsCreateWithoutCategoryInputSchema),z.lazy(() => wordsCreateWithoutCategoryInputSchema).array(),z.lazy(() => wordsUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => wordsUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wordsCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => wordsCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => wordsCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default wordsCreateNestedManyWithoutCategoryInputSchema;
