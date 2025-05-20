import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsCreateWithoutMunicipalityInputSchema } from './settlementsCreateWithoutMunicipalityInputSchema';
import { settlementsUncheckedCreateWithoutMunicipalityInputSchema } from './settlementsUncheckedCreateWithoutMunicipalityInputSchema';
import { settlementsCreateOrConnectWithoutMunicipalityInputSchema } from './settlementsCreateOrConnectWithoutMunicipalityInputSchema';
import { settlementsUpsertWithWhereUniqueWithoutMunicipalityInputSchema } from './settlementsUpsertWithWhereUniqueWithoutMunicipalityInputSchema';
import { settlementsCreateManyMunicipalityInputEnvelopeSchema } from './settlementsCreateManyMunicipalityInputEnvelopeSchema';
import { settlementsWhereUniqueInputSchema } from './settlementsWhereUniqueInputSchema';
import { settlementsUpdateWithWhereUniqueWithoutMunicipalityInputSchema } from './settlementsUpdateWithWhereUniqueWithoutMunicipalityInputSchema';
import { settlementsUpdateManyWithWhereWithoutMunicipalityInputSchema } from './settlementsUpdateManyWithWhereWithoutMunicipalityInputSchema';
import { settlementsScalarWhereInputSchema } from './settlementsScalarWhereInputSchema';

export const settlementsUncheckedUpdateManyWithoutMunicipalityNestedInputSchema: z.ZodType<Prisma.settlementsUncheckedUpdateManyWithoutMunicipalityNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => settlementsCreateWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsCreateWithoutMunicipalityInputSchema).array(),
					z.lazy(() => settlementsUncheckedCreateWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsUncheckedCreateWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => settlementsCreateOrConnectWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsCreateOrConnectWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => settlementsUpsertWithWhereUniqueWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsUpsertWithWhereUniqueWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => settlementsCreateManyMunicipalityInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => settlementsWhereUniqueInputSchema),
					z.lazy(() => settlementsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => settlementsWhereUniqueInputSchema),
					z.lazy(() => settlementsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => settlementsWhereUniqueInputSchema),
					z.lazy(() => settlementsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => settlementsWhereUniqueInputSchema),
					z.lazy(() => settlementsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => settlementsUpdateWithWhereUniqueWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsUpdateWithWhereUniqueWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => settlementsUpdateManyWithWhereWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsUpdateManyWithWhereWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => settlementsScalarWhereInputSchema),
					z.lazy(() => settlementsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default settlementsUncheckedUpdateManyWithoutMunicipalityNestedInputSchema;
