import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataCreateWithoutMunicipalityInputSchema } from './weather_dataCreateWithoutMunicipalityInputSchema';
import { weather_dataUncheckedCreateWithoutMunicipalityInputSchema } from './weather_dataUncheckedCreateWithoutMunicipalityInputSchema';
import { weather_dataCreateOrConnectWithoutMunicipalityInputSchema } from './weather_dataCreateOrConnectWithoutMunicipalityInputSchema';
import { weather_dataCreateManyMunicipalityInputEnvelopeSchema } from './weather_dataCreateManyMunicipalityInputEnvelopeSchema';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';

export const weather_dataUncheckedCreateNestedManyWithoutMunicipalityInputSchema: z.ZodType<Prisma.weather_dataUncheckedCreateNestedManyWithoutMunicipalityInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => weather_dataCreateWithoutMunicipalityInputSchema),
					z.lazy(() => weather_dataCreateWithoutMunicipalityInputSchema).array(),
					z.lazy(() => weather_dataUncheckedCreateWithoutMunicipalityInputSchema),
					z.lazy(() => weather_dataUncheckedCreateWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => weather_dataCreateOrConnectWithoutMunicipalityInputSchema),
					z.lazy(() => weather_dataCreateOrConnectWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => weather_dataCreateManyMunicipalityInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => weather_dataWhereUniqueInputSchema),
					z.lazy(() => weather_dataWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default weather_dataUncheckedCreateNestedManyWithoutMunicipalityInputSchema;
