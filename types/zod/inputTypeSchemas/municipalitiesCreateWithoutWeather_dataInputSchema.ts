import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { driver_municipalitiesCreateNestedManyWithoutMunicipalitiesInputSchema } from './driver_municipalitiesCreateNestedManyWithoutMunicipalitiesInputSchema';
import { settlementsCreateNestedManyWithoutMunicipalityInputSchema } from './settlementsCreateNestedManyWithoutMunicipalityInputSchema';

export const municipalitiesCreateWithoutWeather_dataInputSchema: z.ZodType<Prisma.municipalitiesCreateWithoutWeather_dataInput> =
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
			driver_municipalities: z
				.lazy(() => driver_municipalitiesCreateNestedManyWithoutMunicipalitiesInputSchema)
				.optional(),
			settlements: z.lazy(() => settlementsCreateNestedManyWithoutMunicipalityInputSchema).optional(),
		})
		.strict();

export default municipalitiesCreateWithoutWeather_dataInputSchema;
