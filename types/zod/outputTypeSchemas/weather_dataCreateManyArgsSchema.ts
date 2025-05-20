import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { weather_dataCreateManyInputSchema } from '../inputTypeSchemas/weather_dataCreateManyInputSchema'

export const weather_dataCreateManyArgsSchema: z.ZodType<Prisma.weather_dataCreateManyArgs> = z.object({
  data: z.union([ weather_dataCreateManyInputSchema,weather_dataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default weather_dataCreateManyArgsSchema;
