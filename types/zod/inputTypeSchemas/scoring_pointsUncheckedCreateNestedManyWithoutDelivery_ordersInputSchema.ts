import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutDelivery_ordersInputSchema } from './scoring_pointsCreateWithoutDelivery_ordersInputSchema';
import { scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema } from './scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema';
import { scoring_pointsCreateOrConnectWithoutDelivery_ordersInputSchema } from './scoring_pointsCreateOrConnectWithoutDelivery_ordersInputSchema';
import { scoring_pointsCreateManyDelivery_ordersInputEnvelopeSchema } from './scoring_pointsCreateManyDelivery_ordersInputEnvelopeSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';

export const scoring_pointsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedCreateNestedManyWithoutDelivery_ordersInput> =
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
			createMany: z.lazy(() => scoring_pointsCreateManyDelivery_ordersInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => scoring_pointsWhereUniqueInputSchema),
					z.lazy(() => scoring_pointsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default scoring_pointsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema;
