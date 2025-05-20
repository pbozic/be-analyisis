import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesScalarWhereInputSchema } from './driver_municipalitiesScalarWhereInputSchema';
import { driver_municipalitiesUpdateManyMutationInputSchema } from './driver_municipalitiesUpdateManyMutationInputSchema';
import { driver_municipalitiesUncheckedUpdateManyWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUncheckedUpdateManyWithoutMunicipalitiesInputSchema';

export const driver_municipalitiesUpdateManyWithWhereWithoutMunicipalitiesInputSchema: z.ZodType<Prisma.driver_municipalitiesUpdateManyWithWhereWithoutMunicipalitiesInput> =
	z
		.object({
			where: z.lazy(() => driver_municipalitiesScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => driver_municipalitiesUpdateManyMutationInputSchema),
				z.lazy(() => driver_municipalitiesUncheckedUpdateManyWithoutMunicipalitiesInputSchema),
			]),
		})
		.strict();

export default driver_municipalitiesUpdateManyWithWhereWithoutMunicipalitiesInputSchema;
