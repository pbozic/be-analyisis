import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';
import { municipalitiesCreateWithoutWeather_dataInputSchema } from './municipalitiesCreateWithoutWeather_dataInputSchema';
import { municipalitiesUncheckedCreateWithoutWeather_dataInputSchema } from './municipalitiesUncheckedCreateWithoutWeather_dataInputSchema';

export const municipalitiesCreateOrConnectWithoutWeather_dataInputSchema: z.ZodType<Prisma.municipalitiesCreateOrConnectWithoutWeather_dataInput> =
	z
		.object({
			where: z.lazy(() => municipalitiesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => municipalitiesCreateWithoutWeather_dataInputSchema),
				z.lazy(() => municipalitiesUncheckedCreateWithoutWeather_dataInputSchema),
			]),
		})
		.strict();

export default municipalitiesCreateOrConnectWithoutWeather_dataInputSchema;
