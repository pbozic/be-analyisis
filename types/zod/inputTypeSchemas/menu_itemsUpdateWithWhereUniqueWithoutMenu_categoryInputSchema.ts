import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsWhereUniqueInputSchema } from './menu_itemsWhereUniqueInputSchema';
import { menu_itemsUpdateWithoutMenu_categoryInputSchema } from './menu_itemsUpdateWithoutMenu_categoryInputSchema';
import { menu_itemsUncheckedUpdateWithoutMenu_categoryInputSchema } from './menu_itemsUncheckedUpdateWithoutMenu_categoryInputSchema';

export const menu_itemsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_itemsUpdateWithWhereUniqueWithoutMenu_categoryInput> = z.object({
  where: z.lazy(() => menu_itemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => menu_itemsUpdateWithoutMenu_categoryInputSchema),z.lazy(() => menu_itemsUncheckedUpdateWithoutMenu_categoryInputSchema) ]),
}).strict();

export default menu_itemsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema;
