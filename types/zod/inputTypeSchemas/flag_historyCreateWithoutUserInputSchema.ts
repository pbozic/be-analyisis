import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsCreateNestedOneWithoutHistoryInputSchema } from './flagsCreateNestedOneWithoutHistoryInputSchema';

export const flag_historyCreateWithoutUserInputSchema: z.ZodType<Prisma.flag_historyCreateWithoutUserInput> = z.object({
  flag_history_id: z.string().uuid().optional(),
  status: z.boolean(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  flag: z.lazy(() => flagsCreateNestedOneWithoutHistoryInputSchema)
}).strict();

export default flag_historyCreateWithoutUserInputSchema;
