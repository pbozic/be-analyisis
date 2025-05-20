import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutSub_categoriesInputSchema } from './categoriesCreateWithoutSub_categoriesInputSchema';
import { categoriesUncheckedCreateWithoutSub_categoriesInputSchema } from './categoriesUncheckedCreateWithoutSub_categoriesInputSchema';
import { categoriesCreateOrConnectWithoutSub_categoriesInputSchema } from './categoriesCreateOrConnectWithoutSub_categoriesInputSchema';
import { categoriesUpsertWithoutSub_categoriesInputSchema } from './categoriesUpsertWithoutSub_categoriesInputSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateToOneWithWhereWithoutSub_categoriesInputSchema } from './categoriesUpdateToOneWithWhereWithoutSub_categoriesInputSchema';
import { categoriesUpdateWithoutSub_categoriesInputSchema } from './categoriesUpdateWithoutSub_categoriesInputSchema';
import { categoriesUncheckedUpdateWithoutSub_categoriesInputSchema } from './categoriesUncheckedUpdateWithoutSub_categoriesInputSchema';

export const categoriesUpdateOneWithoutSub_categoriesNestedInputSchema: z.ZodType<Prisma.categoriesUpdateOneWithoutSub_categoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => categoriesCreateWithoutSub_categoriesInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutSub_categoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutSub_categoriesInputSchema).optional(),
  upsert: z.lazy(() => categoriesUpsertWithoutSub_categoriesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => categoriesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => categoriesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => categoriesUpdateToOneWithWhereWithoutSub_categoriesInputSchema),z.lazy(() => categoriesUpdateWithoutSub_categoriesInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutSub_categoriesInputSchema) ]).optional(),
}).strict();

export default categoriesUpdateOneWithoutSub_categoriesNestedInputSchema;
