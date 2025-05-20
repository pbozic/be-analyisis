import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';

export const Group_usersNullableRelationFilterSchema: z.ZodType<Prisma.Group_usersNullableRelationFilter> = z.object({
  is: z.lazy(() => group_usersWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => group_usersWhereInputSchema).optional().nullable()
}).strict();

export default Group_usersNullableRelationFilterSchema;
