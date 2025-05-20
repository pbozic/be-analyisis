import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { settlementsUncheckedCreateNestedManyWithoutMunicipalityInputSchema } from './settlementsUncheckedCreateNestedManyWithoutMunicipalityInputSchema';
import { weather_dataUncheckedCreateNestedManyWithoutMunicipalityInputSchema } from './weather_dataUncheckedCreateNestedManyWithoutMunicipalityInputSchema';

export const municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.municipalitiesUncheckedCreateWithoutDriver_municipalitiesInput> = z.object({
  municipalities_id: z.string().uuid().optional(),
  name: z.string(),
  geojson: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  requires_license: z.boolean().optional(),
  gis_sifra: z.string().optional().nullable(),
  eid_obcina: z.string().optional().nullable(),
  feature_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  settlements: z.lazy(() => settlementsUncheckedCreateNestedManyWithoutMunicipalityInputSchema).optional(),
  weather_data: z.lazy(() => weather_dataUncheckedCreateNestedManyWithoutMunicipalityInputSchema).optional()
}).strict();

export default municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema;
