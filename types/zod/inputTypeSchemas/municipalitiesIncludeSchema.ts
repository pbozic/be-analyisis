import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesFindManyArgsSchema } from "../outputTypeSchemas/driver_municipalitiesFindManyArgsSchema"
import { settlementsFindManyArgsSchema } from "../outputTypeSchemas/settlementsFindManyArgsSchema"
import { weather_dataFindManyArgsSchema } from "../outputTypeSchemas/weather_dataFindManyArgsSchema"
import { MunicipalitiesCountOutputTypeArgsSchema } from "../outputTypeSchemas/MunicipalitiesCountOutputTypeArgsSchema"

export const municipalitiesIncludeSchema: z.ZodType<Prisma.municipalitiesInclude> = z.object({
  driver_municipalities: z.union([z.boolean(),z.lazy(() => driver_municipalitiesFindManyArgsSchema)]).optional(),
  settlements: z.union([z.boolean(),z.lazy(() => settlementsFindManyArgsSchema)]).optional(),
  weather_data: z.union([z.boolean(),z.lazy(() => weather_dataFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MunicipalitiesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default municipalitiesIncludeSchema;
