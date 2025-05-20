import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { EnumVEHICLE_CLASSFieldUpdateOperationsInputSchema } from './EnumVEHICLE_CLASSFieldUpdateOperationsInputSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { EnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema } from './EnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const vehicle_specificationsUpdateManyMutationInputSchema: z.ZodType<Prisma.vehicle_specificationsUpdateManyMutationInput> =
	z
		.object({
			vehicle_specification_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			class: z
				.union([
					z.lazy(() => VEHICLE_CLASSSchema),
					z.lazy(() => EnumVEHICLE_CLASSFieldUpdateOperationsInputSchema),
				])
				.optional(),
			category: z
				.union([
					z.lazy(() => VEHICLE_CATEGORYSchema),
					z.lazy(() => EnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema),
				])
				.optional(),
			people: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			start_cost: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			per_kilometre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			per_minute: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			vehicle_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
		})
		.strict();

export default vehicle_specificationsUpdateManyMutationInputSchema;
