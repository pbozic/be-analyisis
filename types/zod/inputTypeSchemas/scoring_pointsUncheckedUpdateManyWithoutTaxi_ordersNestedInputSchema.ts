import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutTaxi_ordersInputSchema } from './scoring_pointsCreateWithoutTaxi_ordersInputSchema';
import { scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema } from './scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema';
import { scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema } from './scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema';
import { scoring_pointsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema } from './scoring_pointsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema';
import { scoring_pointsCreateManyTaxi_ordersInputEnvelopeSchema } from './scoring_pointsCreateManyTaxi_ordersInputEnvelopeSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema } from './scoring_pointsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema';
import { scoring_pointsUpdateManyWithWhereWithoutTaxi_ordersInputSchema } from './scoring_pointsUpdateManyWithWhereWithoutTaxi_ordersInputSchema';
import { scoring_pointsScalarWhereInputSchema } from './scoring_pointsScalarWhereInputSchema';

export const scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => scoring_pointsCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => scoring_pointsCreateWithoutTaxi_ordersInputSchema).array(),
					z.lazy(() => scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema),
					z.lazy(() => scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => scoring_pointsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema),
					z.lazy(() => scoring_pointsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => scoring_pointsCreateManyTaxi_ordersInputEnvelopeSchema).optional(),
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
					z.lazy(() => scoring_pointsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema),
					z.lazy(() => scoring_pointsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => scoring_pointsUpdateManyWithWhereWithoutTaxi_ordersInputSchema),
					z.lazy(() => scoring_pointsUpdateManyWithWhereWithoutTaxi_ordersInputSchema).array(),
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

export default scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema;
