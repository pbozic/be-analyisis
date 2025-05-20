import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsCreateManyMenu_categoryInputSchema } from './menu_itemsCreateManyMenu_categoryInputSchema';

export const menu_itemsCreateManyMenu_categoryInputEnvelopeSchema: z.ZodType<Prisma.menu_itemsCreateManyMenu_categoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => menu_itemsCreateManyMenu_categoryInputSchema),z.lazy(() => menu_itemsCreateManyMenu_categoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default menu_itemsCreateManyMenu_categoryInputEnvelopeSchema;
