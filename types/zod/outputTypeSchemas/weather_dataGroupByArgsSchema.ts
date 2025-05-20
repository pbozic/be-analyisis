import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { weather_dataWhereInputSchema } from '../inputTypeSchemas/weather_dataWhereInputSchema'
import { weather_dataOrderByWithAggregationInputSchema } from '../inputTypeSchemas/weather_dataOrderByWithAggregationInputSchema'
import { Weather_dataScalarFieldEnumSchema } from '../inputTypeSchemas/Weather_dataScalarFieldEnumSchema'
import { weather_dataScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/weather_dataScalarWhereWithAggregatesInputSchema'

export const weather_dataGroupByArgsSchema: z.ZodType<Prisma.weather_dataGroupByArgs> = z.object({
  where: weather_dataWhereInputSchema.optional(),
  orderBy: z.union([ weather_dataOrderByWithAggregationInputSchema.array(),weather_dataOrderByWithAggregationInputSchema ]).optional(),
  by: Weather_dataScalarFieldEnumSchema.array(),
  having: weather_dataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default weather_dataGroupByArgsSchema;
