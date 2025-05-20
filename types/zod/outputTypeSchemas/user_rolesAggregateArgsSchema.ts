import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesWhereInputSchema } from '../inputTypeSchemas/user_rolesWhereInputSchema'
import { user_rolesOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_rolesOrderByWithRelationInputSchema'
import { user_rolesWhereUniqueInputSchema } from '../inputTypeSchemas/user_rolesWhereUniqueInputSchema'

export const user_rolesAggregateArgsSchema: z.ZodType<Prisma.user_rolesAggregateArgs> = z.object({
  where: user_rolesWhereInputSchema.optional(),
  orderBy: z.union([ user_rolesOrderByWithRelationInputSchema.array(),user_rolesOrderByWithRelationInputSchema ]).optional(),
  cursor: user_rolesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default user_rolesAggregateArgsSchema;
