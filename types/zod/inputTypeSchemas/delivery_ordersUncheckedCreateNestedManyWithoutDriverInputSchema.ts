import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutDriverInputSchema } from './delivery_ordersCreateWithoutDriverInputSchema';
import { delivery_ordersUncheckedCreateWithoutDriverInputSchema } from './delivery_ordersUncheckedCreateWithoutDriverInputSchema';
import { delivery_ordersCreateOrConnectWithoutDriverInputSchema } from './delivery_ordersCreateOrConnectWithoutDriverInputSchema';
import { delivery_ordersCreateManyDriverInputEnvelopeSchema } from './delivery_ordersCreateManyDriverInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersUncheckedCreateNestedManyWithoutDriverInputSchema: z.ZodType<Prisma.delivery_ordersUncheckedCreateNestedManyWithoutDriverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersCreateWithoutDriverInputSchema).array(),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutDriverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_ordersCreateOrConnectWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersCreateOrConnectWithoutDriverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_ordersCreateManyDriverInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersUncheckedCreateNestedManyWithoutDriverInputSchema;
