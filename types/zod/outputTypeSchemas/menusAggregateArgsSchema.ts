import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusWhereInputSchema } from '../inputTypeSchemas/menusWhereInputSchema'
import { menusOrderByWithRelationInputSchema } from '../inputTypeSchemas/menusOrderByWithRelationInputSchema'
import { menusWhereUniqueInputSchema } from '../inputTypeSchemas/menusWhereUniqueInputSchema'

export const menusAggregateArgsSchema: z.ZodType<Prisma.menusAggregateArgs> = z.object({
  where: menusWhereInputSchema.optional(),
  orderBy: z.union([ menusOrderByWithRelationInputSchema.array(),menusOrderByWithRelationInputSchema ]).optional(),
  cursor: menusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default menusAggregateArgsSchema;
