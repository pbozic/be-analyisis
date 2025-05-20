import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_favorite_businessesWhereInputSchema } from '../inputTypeSchemas/user_favorite_businessesWhereInputSchema'
import { user_favorite_businessesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/user_favorite_businessesOrderByWithAggregationInputSchema'
import { User_favorite_businessesScalarFieldEnumSchema } from '../inputTypeSchemas/User_favorite_businessesScalarFieldEnumSchema'
import { user_favorite_businessesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/user_favorite_businessesScalarWhereWithAggregatesInputSchema'

export const user_favorite_businessesGroupByArgsSchema: z.ZodType<Prisma.user_favorite_businessesGroupByArgs> = z.object({
  where: user_favorite_businessesWhereInputSchema.optional(),
  orderBy: z.union([ user_favorite_businessesOrderByWithAggregationInputSchema.array(),user_favorite_businessesOrderByWithAggregationInputSchema ]).optional(),
  by: User_favorite_businessesScalarFieldEnumSchema.array(),
  having: user_favorite_businessesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default user_favorite_businessesGroupByArgsSchema;
