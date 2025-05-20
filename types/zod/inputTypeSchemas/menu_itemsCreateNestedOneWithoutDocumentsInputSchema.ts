import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsCreateWithoutDocumentsInputSchema } from './menu_itemsCreateWithoutDocumentsInputSchema';
import { menu_itemsUncheckedCreateWithoutDocumentsInputSchema } from './menu_itemsUncheckedCreateWithoutDocumentsInputSchema';
import { menu_itemsCreateOrConnectWithoutDocumentsInputSchema } from './menu_itemsCreateOrConnectWithoutDocumentsInputSchema';
import { menu_itemsWhereUniqueInputSchema } from './menu_itemsWhereUniqueInputSchema';

export const menu_itemsCreateNestedOneWithoutDocumentsInputSchema: z.ZodType<Prisma.menu_itemsCreateNestedOneWithoutDocumentsInput> = z.object({
  create: z.union([ z.lazy(() => menu_itemsCreateWithoutDocumentsInputSchema),z.lazy(() => menu_itemsUncheckedCreateWithoutDocumentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => menu_itemsCreateOrConnectWithoutDocumentsInputSchema).optional(),
  connect: z.lazy(() => menu_itemsWhereUniqueInputSchema).optional()
}).strict();

export default menu_itemsCreateNestedOneWithoutDocumentsInputSchema;
