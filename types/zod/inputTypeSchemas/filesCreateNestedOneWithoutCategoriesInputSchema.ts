import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateWithoutCategoriesInputSchema } from './filesCreateWithoutCategoriesInputSchema';
import { filesUncheckedCreateWithoutCategoriesInputSchema } from './filesUncheckedCreateWithoutCategoriesInputSchema';
import { filesCreateOrConnectWithoutCategoriesInputSchema } from './filesCreateOrConnectWithoutCategoriesInputSchema';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';

export const filesCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.filesCreateNestedOneWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => filesCreateWithoutCategoriesInputSchema),z.lazy(() => filesUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => filesWhereUniqueInputSchema).optional()
}).strict();

export default filesCreateNestedOneWithoutCategoriesInputSchema;
