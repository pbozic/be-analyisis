import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutParent_userInputSchema } from './usersCreateNestedOneWithoutParent_userInputSchema';
import { allowancesCreateNestedOneWithoutUserInputSchema } from './allowancesCreateNestedOneWithoutUserInputSchema';

export const group_usersCreateWithoutParent_userInputSchema: z.ZodType<Prisma.group_usersCreateWithoutParent_userInput> = z.object({
  group_user_id: z.string().uuid().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  enabled: z.boolean().optional(),
  child_user: z.lazy(() => usersCreateNestedOneWithoutParent_userInputSchema),
  allowance: z.lazy(() => allowancesCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default group_usersCreateWithoutParent_userInputSchema;
