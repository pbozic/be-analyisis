import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesWhereInputSchema } from '../inputTypeSchemas/municipalitiesWhereInputSchema'
import { municipalitiesOrderByWithRelationInputSchema } from '../inputTypeSchemas/municipalitiesOrderByWithRelationInputSchema'
import { municipalitiesWhereUniqueInputSchema } from '../inputTypeSchemas/municipalitiesWhereUniqueInputSchema'

export const municipalitiesAggregateArgsSchema: z.ZodType<Prisma.municipalitiesAggregateArgs> = z.object({
  where: municipalitiesWhereInputSchema.optional(),
  orderBy: z.union([ municipalitiesOrderByWithRelationInputSchema.array(),municipalitiesOrderByWithRelationInputSchema ]).optional(),
  cursor: municipalitiesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default municipalitiesAggregateArgsSchema;
