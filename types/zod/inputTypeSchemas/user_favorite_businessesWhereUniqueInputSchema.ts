import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesUser_typed_favoriteCompoundUniqueInputSchema } from './user_favorite_businessesUser_typed_favoriteCompoundUniqueInputSchema';
import { user_favorite_businessesWhereInputSchema } from './user_favorite_businessesWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumBUSINESS_TYPEFilterSchema } from './EnumBUSINESS_TYPEFilterSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const user_favorite_businessesWhereUniqueInputSchema: z.ZodType<Prisma.user_favorite_businessesWhereUniqueInput> = z.union([
  z.object({
    user_favorite_businesses_id: z.string().uuid(),
    user_typed_favorite: z.lazy(() => user_favorite_businessesUser_typed_favoriteCompoundUniqueInputSchema)
  }),
  z.object({
    user_favorite_businesses_id: z.string().uuid(),
  }),
  z.object({
    user_typed_favorite: z.lazy(() => user_favorite_businessesUser_typed_favoriteCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  user_favorite_businesses_id: z.string().uuid().optional(),
  user_typed_favorite: z.lazy(() => user_favorite_businessesUser_typed_favoriteCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => user_favorite_businessesWhereInputSchema),z.lazy(() => user_favorite_businessesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_favorite_businessesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_favorite_businessesWhereInputSchema),z.lazy(() => user_favorite_businessesWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_type: z.union([ z.lazy(() => EnumBUSINESS_TYPEFilterSchema),z.lazy(() => BUSINESS_TYPESchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
  businesses: z.union([ z.lazy(() => BusinessRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional(),
}).strict());

export default user_favorite_businessesWhereUniqueInputSchema;
