import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';
import { group_usersCreateWithoutAllowanceInputSchema } from './group_usersCreateWithoutAllowanceInputSchema';
import { group_usersUncheckedCreateWithoutAllowanceInputSchema } from './group_usersUncheckedCreateWithoutAllowanceInputSchema';

export const group_usersCreateOrConnectWithoutAllowanceInputSchema: z.ZodType<Prisma.group_usersCreateOrConnectWithoutAllowanceInput> = z.object({
  where: z.lazy(() => group_usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => group_usersCreateWithoutAllowanceInputSchema),z.lazy(() => group_usersUncheckedCreateWithoutAllowanceInputSchema) ]),
}).strict();

export default group_usersCreateOrConnectWithoutAllowanceInputSchema;
