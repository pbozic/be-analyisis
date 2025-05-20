import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyUncheckedCreateNestedManyWithoutFlagInputSchema } from './flag_historyUncheckedCreateNestedManyWithoutFlagInputSchema';

export const flagsUncheckedCreateInputSchema: z.ZodType<Prisma.flagsUncheckedCreateInput> = z.object({
  flag_id: z.string().uuid().optional(),
  name: z.string(),
  status: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  history: z.lazy(() => flag_historyUncheckedCreateNestedManyWithoutFlagInputSchema).optional()
}).strict();

export default flagsUncheckedCreateInputSchema;
