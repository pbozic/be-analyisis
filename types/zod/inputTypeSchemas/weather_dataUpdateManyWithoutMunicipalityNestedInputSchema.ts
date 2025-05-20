import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataCreateWithoutMunicipalityInputSchema } from './weather_dataCreateWithoutMunicipalityInputSchema';
import { weather_dataUncheckedCreateWithoutMunicipalityInputSchema } from './weather_dataUncheckedCreateWithoutMunicipalityInputSchema';
import { weather_dataCreateOrConnectWithoutMunicipalityInputSchema } from './weather_dataCreateOrConnectWithoutMunicipalityInputSchema';
import { weather_dataUpsertWithWhereUniqueWithoutMunicipalityInputSchema } from './weather_dataUpsertWithWhereUniqueWithoutMunicipalityInputSchema';
import { weather_dataCreateManyMunicipalityInputEnvelopeSchema } from './weather_dataCreateManyMunicipalityInputEnvelopeSchema';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';
import { weather_dataUpdateWithWhereUniqueWithoutMunicipalityInputSchema } from './weather_dataUpdateWithWhereUniqueWithoutMunicipalityInputSchema';
import { weather_dataUpdateManyWithWhereWithoutMunicipalityInputSchema } from './weather_dataUpdateManyWithWhereWithoutMunicipalityInputSchema';
import { weather_dataScalarWhereInputSchema } from './weather_dataScalarWhereInputSchema';

export const weather_dataUpdateManyWithoutMunicipalityNestedInputSchema: z.ZodType<Prisma.weather_dataUpdateManyWithoutMunicipalityNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => weather_dataUpsertWithWhereUniqueWithoutMunicipalityInputSchema),
					z.lazy(() => weather_dataUpsertWithWhereUniqueWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => weather_dataCreateManyMunicipalityInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => weather_dataWhereUniqueInputSchema),
					z.lazy(() => weather_dataWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => weather_dataWhereUniqueInputSchema),
					z.lazy(() => weather_dataWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => weather_dataWhereUniqueInputSchema),
					z.lazy(() => weather_dataWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => weather_dataWhereUniqueInputSchema),
					z.lazy(() => weather_dataWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => weather_dataUpdateWithWhereUniqueWithoutMunicipalityInputSchema),
					z.lazy(() => weather_dataUpdateWithWhereUniqueWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => weather_dataUpdateManyWithWhereWithoutMunicipalityInputSchema),
					z.lazy(() => weather_dataUpdateManyWithWhereWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => weather_dataScalarWhereInputSchema),
					z.lazy(() => weather_dataScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default weather_dataUpdateManyWithoutMunicipalityNestedInputSchema;
