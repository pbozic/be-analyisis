import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';
import { driver_municipalitiesUpdateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUpdateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesUncheckedUpdateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUncheckedUpdateWithoutMunicipalitiesInputSchema';

export const driver_municipalitiesUpdateWithWhereUniqueWithoutMunicipalitiesInputSchema: z.ZodType<Prisma.driver_municipalitiesUpdateWithWhereUniqueWithoutMunicipalitiesInput> =
	z
		.object({
			where: z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => driver_municipalitiesUpdateWithoutMunicipalitiesInputSchema),
				z.lazy(() => driver_municipalitiesUncheckedUpdateWithoutMunicipalitiesInputSchema),
			]),
		})
		.strict();

export default driver_municipalitiesUpdateWithWhereUniqueWithoutMunicipalitiesInputSchema;
