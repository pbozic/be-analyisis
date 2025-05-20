import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutBusinessesInputSchema } from './scoring_pointsCreateWithoutBusinessesInputSchema';
import { scoring_pointsUncheckedCreateWithoutBusinessesInputSchema } from './scoring_pointsUncheckedCreateWithoutBusinessesInputSchema';
import { scoring_pointsCreateOrConnectWithoutBusinessesInputSchema } from './scoring_pointsCreateOrConnectWithoutBusinessesInputSchema';
import { scoring_pointsUpsertWithWhereUniqueWithoutBusinessesInputSchema } from './scoring_pointsUpsertWithWhereUniqueWithoutBusinessesInputSchema';
import { scoring_pointsCreateManyBusinessesInputEnvelopeSchema } from './scoring_pointsCreateManyBusinessesInputEnvelopeSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithWhereUniqueWithoutBusinessesInputSchema } from './scoring_pointsUpdateWithWhereUniqueWithoutBusinessesInputSchema';
import { scoring_pointsUpdateManyWithWhereWithoutBusinessesInputSchema } from './scoring_pointsUpdateManyWithWhereWithoutBusinessesInputSchema';
import { scoring_pointsScalarWhereInputSchema } from './scoring_pointsScalarWhereInputSchema';

export const scoring_pointsUncheckedUpdateManyWithoutBusinessesNestedInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedUpdateManyWithoutBusinessesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => scoring_pointsCreateWithoutBusinessesInputSchema),
					z.lazy(() => scoring_pointsCreateWithoutBusinessesInputSchema).array(),
					z.lazy(() => scoring_pointsUncheckedCreateWithoutBusinessesInputSchema),
					z.lazy(() => scoring_pointsUncheckedCreateWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => scoring_pointsCreateOrConnectWithoutBusinessesInputSchema),
					z.lazy(() => scoring_pointsCreateOrConnectWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => scoring_pointsUpsertWithWhereUniqueWithoutBusinessesInputSchema),
					z.lazy(() => scoring_pointsUpsertWithWhereUniqueWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => scoring_pointsCreateManyBusinessesInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => scoring_pointsWhereUniqueInputSchema),
					z.lazy(() => scoring_pointsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => scoring_pointsWhereUniqueInputSchema),
					z.lazy(() => scoring_pointsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => scoring_pointsWhereUniqueInputSchema),
					z.lazy(() => scoring_pointsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => scoring_pointsWhereUniqueInputSchema),
					z.lazy(() => scoring_pointsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => scoring_pointsUpdateWithWhereUniqueWithoutBusinessesInputSchema),
					z.lazy(() => scoring_pointsUpdateWithWhereUniqueWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => scoring_pointsUpdateManyWithWhereWithoutBusinessesInputSchema),
					z.lazy(() => scoring_pointsUpdateManyWithWhereWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => scoring_pointsScalarWhereInputSchema),
					z.lazy(() => scoring_pointsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default scoring_pointsUncheckedUpdateManyWithoutBusinessesNestedInputSchema;
