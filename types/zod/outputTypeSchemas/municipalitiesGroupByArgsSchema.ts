import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesWhereInputSchema } from '../inputTypeSchemas/municipalitiesWhereInputSchema'
import { municipalitiesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/municipalitiesOrderByWithAggregationInputSchema'
import { MunicipalitiesScalarFieldEnumSchema } from '../inputTypeSchemas/MunicipalitiesScalarFieldEnumSchema'
import { municipalitiesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/municipalitiesScalarWhereWithAggregatesInputSchema'

export const municipalitiesGroupByArgsSchema: z.ZodType<Prisma.municipalitiesGroupByArgs> = z.object({
  where: municipalitiesWhereInputSchema.optional(),
  orderBy: z.union([ municipalitiesOrderByWithAggregationInputSchema.array(),municipalitiesOrderByWithAggregationInputSchema ]).optional(),
  by: MunicipalitiesScalarFieldEnumSchema.array(),
  having: municipalitiesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default municipalitiesGroupByArgsSchema;
