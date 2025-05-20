import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsCreateWithoutDocumentsInputSchema } from './menu_itemsCreateWithoutDocumentsInputSchema';
import { menu_itemsUncheckedCreateWithoutDocumentsInputSchema } from './menu_itemsUncheckedCreateWithoutDocumentsInputSchema';
import { menu_itemsCreateOrConnectWithoutDocumentsInputSchema } from './menu_itemsCreateOrConnectWithoutDocumentsInputSchema';
import { menu_itemsUpsertWithoutDocumentsInputSchema } from './menu_itemsUpsertWithoutDocumentsInputSchema';
import { menu_itemsWhereInputSchema } from './menu_itemsWhereInputSchema';
import { menu_itemsWhereUniqueInputSchema } from './menu_itemsWhereUniqueInputSchema';
import { menu_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema } from './menu_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema';
import { menu_itemsUpdateWithoutDocumentsInputSchema } from './menu_itemsUpdateWithoutDocumentsInputSchema';
import { menu_itemsUncheckedUpdateWithoutDocumentsInputSchema } from './menu_itemsUncheckedUpdateWithoutDocumentsInputSchema';

export const menu_itemsUpdateOneWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.menu_itemsUpdateOneWithoutDocumentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => menu_itemsCreateWithoutDocumentsInputSchema),z.lazy(() => menu_itemsUncheckedCreateWithoutDocumentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => menu_itemsCreateOrConnectWithoutDocumentsInputSchema).optional(),
  upsert: z.lazy(() => menu_itemsUpsertWithoutDocumentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => menu_itemsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => menu_itemsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => menu_itemsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => menu_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema),z.lazy(() => menu_itemsUpdateWithoutDocumentsInputSchema),z.lazy(() => menu_itemsUncheckedUpdateWithoutDocumentsInputSchema) ]).optional(),
}).strict();

export default menu_itemsUpdateOneWithoutDocumentsNestedInputSchema;
