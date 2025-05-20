import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { usersCreateNestedOneWithoutLost_itemsInputSchema } from './usersCreateNestedOneWithoutLost_itemsInputSchema';

export const lost_itemsCreateWithoutDocumentsInputSchema: z.ZodType<Prisma.lost_itemsCreateWithoutDocumentsInput> = z.object({
  lost_item_id: z.string().uuid().optional(),
  status: z.lazy(() => LOST_FOUND_STATUSSchema).optional(),
  description: z.string(),
  found: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutLost_itemsInputSchema).optional()
}).strict();

export default lost_itemsCreateWithoutDocumentsInputSchema;
