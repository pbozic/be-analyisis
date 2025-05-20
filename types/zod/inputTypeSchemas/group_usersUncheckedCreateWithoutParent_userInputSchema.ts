import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesUncheckedCreateNestedOneWithoutUserInputSchema } from './allowancesUncheckedCreateNestedOneWithoutUserInputSchema';

export const group_usersUncheckedCreateWithoutParent_userInputSchema: z.ZodType<Prisma.group_usersUncheckedCreateWithoutParent_userInput> = z.object({
  group_user_id: z.string().uuid().optional(),
  child_user_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  enabled: z.boolean().optional(),
  allowance: z.lazy(() => allowancesUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default group_usersUncheckedCreateWithoutParent_userInputSchema;
