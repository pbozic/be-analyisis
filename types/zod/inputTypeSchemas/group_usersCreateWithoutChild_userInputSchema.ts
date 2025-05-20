import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutChild_usersInputSchema } from './usersCreateNestedOneWithoutChild_usersInputSchema';
import { allowancesCreateNestedOneWithoutUserInputSchema } from './allowancesCreateNestedOneWithoutUserInputSchema';

export const group_usersCreateWithoutChild_userInputSchema: z.ZodType<Prisma.group_usersCreateWithoutChild_userInput> = z.object({
  group_user_id: z.string().uuid().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  enabled: z.boolean().optional(),
  parent_user: z.lazy(() => usersCreateNestedOneWithoutChild_usersInputSchema),
  allowance: z.lazy(() => allowancesCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default group_usersCreateWithoutChild_userInputSchema;
