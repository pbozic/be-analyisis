import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { settlementsCreateNestedManyWithoutMunicipalityInputSchema } from './settlementsCreateNestedManyWithoutMunicipalityInputSchema';
import { weather_dataCreateNestedManyWithoutMunicipalityInputSchema } from './weather_dataCreateNestedManyWithoutMunicipalityInputSchema';

export const municipalitiesCreateWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.municipalitiesCreateWithoutDriver_municipalitiesInput> =
	z
		.object({
			municipalities_id: z.string().uuid().optional(),
			name: z.string(),
			geojson: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			requires_license: z.boolean().optional(),
			gis_sifra: z.string().optional().nullable(),
			eid_obcina: z.string().optional().nullable(),
			feature_id: z.string().optional().nullable(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			settlements: z.lazy(() => settlementsCreateNestedManyWithoutMunicipalityInputSchema).optional(),
			weather_data: z.lazy(() => weather_dataCreateNestedManyWithoutMunicipalityInputSchema).optional(),
		})
		.strict();

export default municipalitiesCreateWithoutDriver_municipalitiesInputSchema;
