import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { weather_dataWhereInputSchema } from '../inputTypeSchemas/weather_dataWhereInputSchema'
import { weather_dataOrderByWithRelationInputSchema } from '../inputTypeSchemas/weather_dataOrderByWithRelationInputSchema'
import { weather_dataWhereUniqueInputSchema } from '../inputTypeSchemas/weather_dataWhereUniqueInputSchema'

export const weather_dataAggregateArgsSchema: z.ZodType<Prisma.weather_dataAggregateArgs> = z.object({
  where: weather_dataWhereInputSchema.optional(),
  orderBy: z.union([ weather_dataOrderByWithRelationInputSchema.array(),weather_dataOrderByWithRelationInputSchema ]).optional(),
  cursor: weather_dataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default weather_dataAggregateArgsSchema;
