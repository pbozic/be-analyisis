import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { documentsUncheckedCreateNestedManyWithoutLost_itemsInputSchema } from './documentsUncheckedCreateNestedManyWithoutLost_itemsInputSchema';

export const lost_itemsUncheckedCreateInputSchema: z.ZodType<Prisma.lost_itemsUncheckedCreateInput> = z.object({
  lost_item_id: z.string().uuid().optional(),
  user_id: z.string().optional().nullable(),
  status: z.lazy(() => LOST_FOUND_STATUSSchema).optional(),
  description: z.string(),
  found: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  documents: z.lazy(() => documentsUncheckedCreateNestedManyWithoutLost_itemsInputSchema).optional()
}).strict();

export default lost_itemsUncheckedCreateInputSchema;
