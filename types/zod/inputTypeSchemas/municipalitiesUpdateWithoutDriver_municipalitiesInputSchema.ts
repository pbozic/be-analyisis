import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { settlementsUpdateManyWithoutMunicipalityNestedInputSchema } from './settlementsUpdateManyWithoutMunicipalityNestedInputSchema';
import { weather_dataUpdateManyWithoutMunicipalityNestedInputSchema } from './weather_dataUpdateManyWithoutMunicipalityNestedInputSchema';

export const municipalitiesUpdateWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.municipalitiesUpdateWithoutDriver_municipalitiesInput> =
	z
		.object({
			municipalities_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			geojson: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			requires_license: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			gis_sifra: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			eid_obcina: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			feature_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			settlements: z.lazy(() => settlementsUpdateManyWithoutMunicipalityNestedInputSchema).optional(),
			weather_data: z.lazy(() => weather_dataUpdateManyWithoutMunicipalityNestedInputSchema).optional(),
		})
		.strict();

export default municipalitiesUpdateWithoutDriver_municipalitiesInputSchema;
