import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressWhereInputSchema } from '../inputTypeSchemas/user_addressWhereInputSchema'
import { user_addressOrderByWithAggregationInputSchema } from '../inputTypeSchemas/user_addressOrderByWithAggregationInputSchema'
import { User_addressScalarFieldEnumSchema } from '../inputTypeSchemas/User_addressScalarFieldEnumSchema'
import { user_addressScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/user_addressScalarWhereWithAggregatesInputSchema'

export const user_addressGroupByArgsSchema: z.ZodType<Prisma.user_addressGroupByArgs> = z.object({
  where: user_addressWhereInputSchema.optional(),
  orderBy: z.union([ user_addressOrderByWithAggregationInputSchema.array(),user_addressOrderByWithAggregationInputSchema ]).optional(),
  by: User_addressScalarFieldEnumSchema.array(),
  having: user_addressScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default user_addressGroupByArgsSchema;
