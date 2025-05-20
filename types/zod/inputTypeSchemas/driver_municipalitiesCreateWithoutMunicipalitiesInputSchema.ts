import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateNestedOneWithoutDriver_municipalitiesInputSchema } from './driversCreateNestedOneWithoutDriver_municipalitiesInputSchema';

export const driver_municipalitiesCreateWithoutMunicipalitiesInputSchema: z.ZodType<Prisma.driver_municipalitiesCreateWithoutMunicipalitiesInput> =
	z
		.object({
			driver_municipalities_id: z.string().uuid().optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			drivers: z.lazy(() => driversCreateNestedOneWithoutDriver_municipalitiesInputSchema),
		})
		.strict();

export default driver_municipalitiesCreateWithoutMunicipalitiesInputSchema;
