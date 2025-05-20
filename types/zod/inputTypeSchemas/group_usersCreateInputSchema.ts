import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutChild_usersInputSchema } from './usersCreateNestedOneWithoutChild_usersInputSchema';
import { usersCreateNestedOneWithoutParent_userInputSchema } from './usersCreateNestedOneWithoutParent_userInputSchema';
import { allowancesCreateNestedOneWithoutUserInputSchema } from './allowancesCreateNestedOneWithoutUserInputSchema';

export const group_usersCreateInputSchema: z.ZodType<Prisma.group_usersCreateInput> = z.object({
  group_user_id: z.string().uuid().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  enabled: z.boolean().optional(),
  parent_user: z.lazy(() => usersCreateNestedOneWithoutChild_usersInputSchema),
  child_user: z.lazy(() => usersCreateNestedOneWithoutParent_userInputSchema),
  allowance: z.lazy(() => allowancesCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default group_usersCreateInputSchema;
