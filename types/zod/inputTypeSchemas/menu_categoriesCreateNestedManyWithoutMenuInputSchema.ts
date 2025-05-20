import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateWithoutMenuInputSchema } from './menu_categoriesCreateWithoutMenuInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenuInputSchema } from './menu_categoriesUncheckedCreateWithoutMenuInputSchema';
import { menu_categoriesCreateOrConnectWithoutMenuInputSchema } from './menu_categoriesCreateOrConnectWithoutMenuInputSchema';
import { menu_categoriesCreateManyMenuInputEnvelopeSchema } from './menu_categoriesCreateManyMenuInputEnvelopeSchema';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';

export const menu_categoriesCreateNestedManyWithoutMenuInputSchema: z.ZodType<Prisma.menu_categoriesCreateNestedManyWithoutMenuInput> = z.object({
  create: z.union([ z.lazy(() => menu_categoriesCreateWithoutMenuInputSchema),z.lazy(() => menu_categoriesCreateWithoutMenuInputSchema).array(),z.lazy(() => menu_categoriesUncheckedCreateWithoutMenuInputSchema),z.lazy(() => menu_categoriesUncheckedCreateWithoutMenuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => menu_categoriesCreateOrConnectWithoutMenuInputSchema),z.lazy(() => menu_categoriesCreateOrConnectWithoutMenuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => menu_categoriesCreateManyMenuInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => menu_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categoriesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default menu_categoriesCreateNestedManyWithoutMenuInputSchema;
