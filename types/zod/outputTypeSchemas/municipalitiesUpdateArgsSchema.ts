import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesIncludeSchema } from '../inputTypeSchemas/municipalitiesIncludeSchema'
import { municipalitiesUpdateInputSchema } from '../inputTypeSchemas/municipalitiesUpdateInputSchema'
import { municipalitiesUncheckedUpdateInputSchema } from '../inputTypeSchemas/municipalitiesUncheckedUpdateInputSchema'
import { municipalitiesWhereUniqueInputSchema } from '../inputTypeSchemas/municipalitiesWhereUniqueInputSchema'
import { driver_municipalitiesFindManyArgsSchema } from "../outputTypeSchemas/driver_municipalitiesFindManyArgsSchema"
import { settlementsFindManyArgsSchema } from "../outputTypeSchemas/settlementsFindManyArgsSchema"
import { weather_dataFindManyArgsSchema } from "../outputTypeSchemas/weather_dataFindManyArgsSchema"
import { MunicipalitiesCountOutputTypeArgsSchema } from "../outputTypeSchemas/MunicipalitiesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const municipalitiesSelectSchema: z.ZodType<Prisma.municipalitiesSelect> = z.object({
  municipalities_id: z.boolean().optional(),
  name: z.boolean().optional(),
  geojson: z.boolean().optional(),
  requires_license: z.boolean().optional(),
  gis_sifra: z.boolean().optional(),
  eid_obcina: z.boolean().optional(),
  feature_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  driver_municipalities: z.union([z.boolean(),z.lazy(() => driver_municipalitiesFindManyArgsSchema)]).optional(),
  settlements: z.union([z.boolean(),z.lazy(() => settlementsFindManyArgsSchema)]).optional(),
  weather_data: z.union([z.boolean(),z.lazy(() => weather_dataFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MunicipalitiesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const municipalitiesUpdateArgsSchema: z.ZodType<Prisma.municipalitiesUpdateArgs> = z.object({
  select: municipalitiesSelectSchema.optional(),
  include: municipalitiesIncludeSchema.optional(),
  data: z.union([ municipalitiesUpdateInputSchema,municipalitiesUncheckedUpdateInputSchema ]),
  where: municipalitiesWhereUniqueInputSchema,
}).strict() ;

export default municipalitiesUpdateArgsSchema;
