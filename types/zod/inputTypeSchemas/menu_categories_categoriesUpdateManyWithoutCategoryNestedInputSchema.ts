import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesCreateWithoutCategoryInputSchema } from './menu_categories_categoriesCreateWithoutCategoryInputSchema';
import { menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema } from './menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema';
import { menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema } from './menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema';
import { menu_categories_categoriesUpsertWithWhereUniqueWithoutCategoryInputSchema } from './menu_categories_categoriesUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { menu_categories_categoriesCreateManyCategoryInputEnvelopeSchema } from './menu_categories_categoriesCreateManyCategoryInputEnvelopeSchema';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';
import { menu_categories_categoriesUpdateWithWhereUniqueWithoutCategoryInputSchema } from './menu_categories_categoriesUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { menu_categories_categoriesUpdateManyWithWhereWithoutCategoryInputSchema } from './menu_categories_categoriesUpdateManyWithWhereWithoutCategoryInputSchema';
import { menu_categories_categoriesScalarWhereInputSchema } from './menu_categories_categoriesScalarWhereInputSchema';

export const menu_categories_categoriesUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => menu_categories_categoriesCreateWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesCreateWithoutCategoryInputSchema).array(),z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => menu_categories_categoriesUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => menu_categories_categoriesCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => menu_categories_categoriesUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => menu_categories_categoriesUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => menu_categories_categoriesScalarWhereInputSchema),z.lazy(() => menu_categories_categoriesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default menu_categories_categoriesUpdateManyWithoutCategoryNestedInputSchema;
