import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutFlag_changesInputSchema } from './usersCreateNestedOneWithoutFlag_changesInputSchema';

export const flag_historyCreateWithoutFlagInputSchema: z.ZodType<Prisma.flag_historyCreateWithoutFlagInput> = z.object({
  flag_history_id: z.string().uuid().optional(),
  status: z.boolean(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutFlag_changesInputSchema)
}).strict();

export default flag_historyCreateWithoutFlagInputSchema;
