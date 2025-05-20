import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsScalarWhereInputSchema } from './menu_itemsScalarWhereInputSchema';
import { menu_itemsUpdateManyMutationInputSchema } from './menu_itemsUpdateManyMutationInputSchema';
import { menu_itemsUncheckedUpdateManyWithoutMenu_categoryInputSchema } from './menu_itemsUncheckedUpdateManyWithoutMenu_categoryInputSchema';

export const menu_itemsUpdateManyWithWhereWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_itemsUpdateManyWithWhereWithoutMenu_categoryInput> = z.object({
  where: z.lazy(() => menu_itemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => menu_itemsUpdateManyMutationInputSchema),z.lazy(() => menu_itemsUncheckedUpdateManyWithoutMenu_categoryInputSchema) ]),
}).strict();

export default menu_itemsUpdateManyWithWhereWithoutMenu_categoryInputSchema;
