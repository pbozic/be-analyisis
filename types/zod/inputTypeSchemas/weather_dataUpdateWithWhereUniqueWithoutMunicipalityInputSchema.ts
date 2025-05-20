import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';
import { weather_dataUpdateWithoutMunicipalityInputSchema } from './weather_dataUpdateWithoutMunicipalityInputSchema';
import { weather_dataUncheckedUpdateWithoutMunicipalityInputSchema } from './weather_dataUncheckedUpdateWithoutMunicipalityInputSchema';

export const weather_dataUpdateWithWhereUniqueWithoutMunicipalityInputSchema: z.ZodType<Prisma.weather_dataUpdateWithWhereUniqueWithoutMunicipalityInput> =
	z
		.object({
			where: z.lazy(() => weather_dataWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => weather_dataUpdateWithoutMunicipalityInputSchema),
				z.lazy(() => weather_dataUncheckedUpdateWithoutMunicipalityInputSchema),
			]),
		})
		.strict();

export default weather_dataUpdateWithWhereUniqueWithoutMunicipalityInputSchema;
