import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutDelivery_ordersInputSchema } from './scoring_pointsCreateWithoutDelivery_ordersInputSchema';
import { scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema } from './scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema';
import { scoring_pointsCreateOrConnectWithoutDelivery_ordersInputSchema } from './scoring_pointsCreateOrConnectWithoutDelivery_ordersInputSchema';
import { scoring_pointsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema } from './scoring_pointsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema';
import { scoring_pointsCreateManyDelivery_ordersInputEnvelopeSchema } from './scoring_pointsCreateManyDelivery_ordersInputEnvelopeSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema } from './scoring_pointsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema';
import { scoring_pointsUpdateManyWithWhereWithoutDelivery_ordersInputSchema } from './scoring_pointsUpdateManyWithWhereWithoutDelivery_ordersInputSchema';
import { scoring_pointsScalarWhereInputSchema } from './scoring_pointsScalarWhereInputSchema';

export const scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => scoring_pointsCreateWithoutDelivery_ordersInputSchema),
					z.lazy(() => scoring_pointsCreateWithoutDelivery_ordersInputSchema).array(),
					z.lazy(() => scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema),
					z.lazy(() => scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => scoring_pointsCreateOrConnectWithoutDelivery_ordersInputSchema),
					z.lazy(() => scoring_pointsCreateOrConnectWithoutDelivery_ordersInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => scoring_pointsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema),
					z.lazy(() => scoring_pointsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => scoring_pointsCreateManyDelivery_ordersInputEnvelopeSchema).optional(),
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
					z.lazy(() => scoring_pointsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema),
					z.lazy(() => scoring_pointsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => scoring_pointsUpdateManyWithWhereWithoutDelivery_ordersInputSchema),
					z.lazy(() => scoring_pointsUpdateManyWithWhereWithoutDelivery_ordersInputSchema).array(),
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

export default scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema;
