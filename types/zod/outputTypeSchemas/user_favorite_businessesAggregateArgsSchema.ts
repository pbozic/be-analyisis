import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_favorite_businessesWhereInputSchema } from '../inputTypeSchemas/user_favorite_businessesWhereInputSchema'
import { user_favorite_businessesOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_favorite_businessesOrderByWithRelationInputSchema'
import { user_favorite_businessesWhereUniqueInputSchema } from '../inputTypeSchemas/user_favorite_businessesWhereUniqueInputSchema'

export const user_favorite_businessesAggregateArgsSchema: z.ZodType<Prisma.user_favorite_businessesAggregateArgs> = z.object({
  where: user_favorite_businessesWhereInputSchema.optional(),
  orderBy: z.union([ user_favorite_businessesOrderByWithRelationInputSchema.array(),user_favorite_businessesOrderByWithRelationInputSchema ]).optional(),
  cursor: user_favorite_businessesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default user_favorite_businessesAggregateArgsSchema;
