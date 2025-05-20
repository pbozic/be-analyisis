import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateWithoutCategoriesInputSchema } from './translatableCreateWithoutCategoriesInputSchema';
import { translatableUncheckedCreateWithoutCategoriesInputSchema } from './translatableUncheckedCreateWithoutCategoriesInputSchema';
import { translatableCreateOrConnectWithoutCategoriesInputSchema } from './translatableCreateOrConnectWithoutCategoriesInputSchema';
import { translatableUpsertWithoutCategoriesInputSchema } from './translatableUpsertWithoutCategoriesInputSchema';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';
import { translatableUpdateToOneWithWhereWithoutCategoriesInputSchema } from './translatableUpdateToOneWithWhereWithoutCategoriesInputSchema';
import { translatableUpdateWithoutCategoriesInputSchema } from './translatableUpdateWithoutCategoriesInputSchema';
import { translatableUncheckedUpdateWithoutCategoriesInputSchema } from './translatableUncheckedUpdateWithoutCategoriesInputSchema';

export const translatableUpdateOneRequiredWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.translatableUpdateOneRequiredWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => translatableCreateWithoutCategoriesInputSchema),z.lazy(() => translatableUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => translatableCreateOrConnectWithoutCategoriesInputSchema).optional(),
  upsert: z.lazy(() => translatableUpsertWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => translatableWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => translatableUpdateToOneWithWhereWithoutCategoriesInputSchema),z.lazy(() => translatableUpdateWithoutCategoriesInputSchema),z.lazy(() => translatableUncheckedUpdateWithoutCategoriesInputSchema) ]).optional(),
}).strict();

export default translatableUpdateOneRequiredWithoutCategoriesNestedInputSchema;
