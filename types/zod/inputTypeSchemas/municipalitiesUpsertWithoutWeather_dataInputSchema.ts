import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesUpdateWithoutWeather_dataInputSchema } from './municipalitiesUpdateWithoutWeather_dataInputSchema';
import { municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema } from './municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema';
import { municipalitiesCreateWithoutWeather_dataInputSchema } from './municipalitiesCreateWithoutWeather_dataInputSchema';
import { municipalitiesUncheckedCreateWithoutWeather_dataInputSchema } from './municipalitiesUncheckedCreateWithoutWeather_dataInputSchema';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';

export const municipalitiesUpsertWithoutWeather_dataInputSchema: z.ZodType<Prisma.municipalitiesUpsertWithoutWeather_dataInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => municipalitiesUpdateWithoutWeather_dataInputSchema),
				z.lazy(() => municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema),
			]),
			create: z.union([
				z.lazy(() => municipalitiesCreateWithoutWeather_dataInputSchema),
				z.lazy(() => municipalitiesUncheckedCreateWithoutWeather_dataInputSchema),
			]),
			where: z.lazy(() => municipalitiesWhereInputSchema).optional(),
		})
		.strict();

export default municipalitiesUpsertWithoutWeather_dataInputSchema;
