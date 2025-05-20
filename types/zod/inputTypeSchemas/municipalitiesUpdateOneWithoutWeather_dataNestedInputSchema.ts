import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesCreateWithoutWeather_dataInputSchema } from './municipalitiesCreateWithoutWeather_dataInputSchema';
import { municipalitiesUncheckedCreateWithoutWeather_dataInputSchema } from './municipalitiesUncheckedCreateWithoutWeather_dataInputSchema';
import { municipalitiesCreateOrConnectWithoutWeather_dataInputSchema } from './municipalitiesCreateOrConnectWithoutWeather_dataInputSchema';
import { municipalitiesUpsertWithoutWeather_dataInputSchema } from './municipalitiesUpsertWithoutWeather_dataInputSchema';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';
import { municipalitiesUpdateToOneWithWhereWithoutWeather_dataInputSchema } from './municipalitiesUpdateToOneWithWhereWithoutWeather_dataInputSchema';
import { municipalitiesUpdateWithoutWeather_dataInputSchema } from './municipalitiesUpdateWithoutWeather_dataInputSchema';
import { municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema } from './municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema';

export const municipalitiesUpdateOneWithoutWeather_dataNestedInputSchema: z.ZodType<Prisma.municipalitiesUpdateOneWithoutWeather_dataNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => municipalitiesCreateWithoutWeather_dataInputSchema),
					z.lazy(() => municipalitiesUncheckedCreateWithoutWeather_dataInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => municipalitiesCreateOrConnectWithoutWeather_dataInputSchema).optional(),
			upsert: z.lazy(() => municipalitiesUpsertWithoutWeather_dataInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => municipalitiesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => municipalitiesWhereInputSchema)]).optional(),
			connect: z.lazy(() => municipalitiesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => municipalitiesUpdateToOneWithWhereWithoutWeather_dataInputSchema),
					z.lazy(() => municipalitiesUpdateWithoutWeather_dataInputSchema),
					z.lazy(() => municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema),
				])
				.optional(),
		})
		.strict();

export default municipalitiesUpdateOneWithoutWeather_dataNestedInputSchema;
