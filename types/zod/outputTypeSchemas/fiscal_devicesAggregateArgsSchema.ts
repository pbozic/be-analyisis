import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesWhereInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereInputSchema'
import { fiscal_devicesOrderByWithRelationInputSchema } from '../inputTypeSchemas/fiscal_devicesOrderByWithRelationInputSchema'
import { fiscal_devicesWhereUniqueInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereUniqueInputSchema'

export const fiscal_devicesAggregateArgsSchema: z.ZodType<Prisma.fiscal_devicesAggregateArgs> = z.object({
  where: fiscal_devicesWhereInputSchema.optional(),
  orderBy: z.union([ fiscal_devicesOrderByWithRelationInputSchema.array(),fiscal_devicesOrderByWithRelationInputSchema ]).optional(),
  cursor: fiscal_devicesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default fiscal_devicesAggregateArgsSchema;
