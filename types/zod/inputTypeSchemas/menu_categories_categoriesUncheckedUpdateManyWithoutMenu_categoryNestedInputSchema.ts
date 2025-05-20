import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesCreateWithoutMenu_categoryInputSchema } from './menu_categories_categoriesCreateWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema } from './menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesUpsertWithWhereUniqueWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUpsertWithWhereUniqueWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesCreateManyMenu_categoryInputEnvelopeSchema } from './menu_categories_categoriesCreateManyMenu_categoryInputEnvelopeSchema';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';
import { menu_categories_categoriesUpdateWithWhereUniqueWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUpdateWithWhereUniqueWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesUpdateManyWithWhereWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUpdateManyWithWhereWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesScalarWhereInputSchema } from './menu_categories_categoriesScalarWhereInputSchema';

export const menu_categories_categoriesUncheckedUpdateManyWithoutMenu_categoryNestedInputSchema: z.ZodType<Prisma.menu_categories_categoriesUncheckedUpdateManyWithoutMenu_categoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => menu_categories_categoriesCreateWithoutMenu_categoryInputSchema),z.lazy(() => menu_categories_categoriesCreateWithoutMenu_categoryInputSchema).array(),z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema),z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema),z.lazy(() => menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => menu_categories_categoriesUpsertWithWhereUniqueWithoutMenu_categoryInputSchema),z.lazy(() => menu_categories_categoriesUpsertWithWhereUniqueWithoutMenu_categoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => menu_categories_categoriesCreateManyMenu_categoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => menu_categories_categoriesUpdateWithWhereUniqueWithoutMenu_categoryInputSchema),z.lazy(() => menu_categories_categoriesUpdateWithWhereUniqueWithoutMenu_categoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => menu_categories_categoriesUpdateManyWithWhereWithoutMenu_categoryInputSchema),z.lazy(() => menu_categories_categoriesUpdateManyWithWhereWithoutMenu_categoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => menu_categories_categoriesScalarWhereInputSchema),z.lazy(() => menu_categories_categoriesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default menu_categories_categoriesUncheckedUpdateManyWithoutMenu_categoryNestedInputSchema;
