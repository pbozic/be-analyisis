import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { weather_dataUpdateManyMutationInputSchema } from '../inputTypeSchemas/weather_dataUpdateManyMutationInputSchema'
import { weather_dataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/weather_dataUncheckedUpdateManyInputSchema'
import { weather_dataWhereInputSchema } from '../inputTypeSchemas/weather_dataWhereInputSchema'

export const weather_dataUpdateManyArgsSchema: z.ZodType<Prisma.weather_dataUpdateManyArgs> = z.object({
  data: z.union([ weather_dataUpdateManyMutationInputSchema,weather_dataUncheckedUpdateManyInputSchema ]),
  where: weather_dataWhereInputSchema.optional(),
}).strict() ;

export default weather_dataUpdateManyArgsSchema;
