import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesArgsSchema } from "../outputTypeSchemas/municipalitiesArgsSchema"
import { weather_dataFindManyArgsSchema } from "../outputTypeSchemas/weather_dataFindManyArgsSchema"
import { SettlementsCountOutputTypeArgsSchema } from "../outputTypeSchemas/SettlementsCountOutputTypeArgsSchema"

export const settlementsIncludeSchema: z.ZodType<Prisma.settlementsInclude> = z.object({
  municipality: z.union([z.boolean(),z.lazy(() => municipalitiesArgsSchema)]).optional(),
  weather_data: z.union([z.boolean(),z.lazy(() => weather_dataFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SettlementsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default settlementsIncludeSchema;
