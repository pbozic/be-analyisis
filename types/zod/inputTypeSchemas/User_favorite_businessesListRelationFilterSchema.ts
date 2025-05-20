import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesWhereInputSchema } from './user_favorite_businessesWhereInputSchema';

export const User_favorite_businessesListRelationFilterSchema: z.ZodType<Prisma.User_favorite_businessesListRelationFilter> = z.object({
  every: z.lazy(() => user_favorite_businessesWhereInputSchema).optional(),
  some: z.lazy(() => user_favorite_businessesWhereInputSchema).optional(),
  none: z.lazy(() => user_favorite_businessesWhereInputSchema).optional()
}).strict();

export default User_favorite_businessesListRelationFilterSchema;
