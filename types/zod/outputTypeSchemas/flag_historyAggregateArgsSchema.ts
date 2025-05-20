import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyWhereInputSchema } from '../inputTypeSchemas/flag_historyWhereInputSchema'
import { flag_historyOrderByWithRelationInputSchema } from '../inputTypeSchemas/flag_historyOrderByWithRelationInputSchema'
import { flag_historyWhereUniqueInputSchema } from '../inputTypeSchemas/flag_historyWhereUniqueInputSchema'

export const flag_historyAggregateArgsSchema: z.ZodType<Prisma.flag_historyAggregateArgs> = z.object({
  where: flag_historyWhereInputSchema.optional(),
  orderBy: z.union([ flag_historyOrderByWithRelationInputSchema.array(),flag_historyOrderByWithRelationInputSchema ]).optional(),
  cursor: flag_historyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default flag_historyAggregateArgsSchema;
