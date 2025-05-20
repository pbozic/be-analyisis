import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersSelectSchema } from '../inputTypeSchemas/group_usersSelectSchema';
import { group_usersIncludeSchema } from '../inputTypeSchemas/group_usersIncludeSchema';

export const group_usersArgsSchema: z.ZodType<Prisma.group_usersDefaultArgs> = z.object({
  select: z.lazy(() => group_usersSelectSchema).optional(),
  include: z.lazy(() => group_usersIncludeSchema).optional(),
}).strict();

export default group_usersArgsSchema;
