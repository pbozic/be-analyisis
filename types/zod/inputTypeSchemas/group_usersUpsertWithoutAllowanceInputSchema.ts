import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersUpdateWithoutAllowanceInputSchema } from './group_usersUpdateWithoutAllowanceInputSchema';
import { group_usersUncheckedUpdateWithoutAllowanceInputSchema } from './group_usersUncheckedUpdateWithoutAllowanceInputSchema';
import { group_usersCreateWithoutAllowanceInputSchema } from './group_usersCreateWithoutAllowanceInputSchema';
import { group_usersUncheckedCreateWithoutAllowanceInputSchema } from './group_usersUncheckedCreateWithoutAllowanceInputSchema';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';

export const group_usersUpsertWithoutAllowanceInputSchema: z.ZodType<Prisma.group_usersUpsertWithoutAllowanceInput> = z.object({
  update: z.union([ z.lazy(() => group_usersUpdateWithoutAllowanceInputSchema),z.lazy(() => group_usersUncheckedUpdateWithoutAllowanceInputSchema) ]),
  create: z.union([ z.lazy(() => group_usersCreateWithoutAllowanceInputSchema),z.lazy(() => group_usersUncheckedCreateWithoutAllowanceInputSchema) ]),
  where: z.lazy(() => group_usersWhereInputSchema).optional()
}).strict();

export default group_usersUpsertWithoutAllowanceInputSchema;
