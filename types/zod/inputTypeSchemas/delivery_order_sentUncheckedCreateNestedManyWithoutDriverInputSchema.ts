import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateWithoutDriverInputSchema } from './delivery_order_sentCreateWithoutDriverInputSchema';
import { delivery_order_sentUncheckedCreateWithoutDriverInputSchema } from './delivery_order_sentUncheckedCreateWithoutDriverInputSchema';
import { delivery_order_sentCreateOrConnectWithoutDriverInputSchema } from './delivery_order_sentCreateOrConnectWithoutDriverInputSchema';
import { delivery_order_sentCreateManyDriverInputEnvelopeSchema } from './delivery_order_sentCreateManyDriverInputEnvelopeSchema';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';

export const delivery_order_sentUncheckedCreateNestedManyWithoutDriverInputSchema: z.ZodType<Prisma.delivery_order_sentUncheckedCreateNestedManyWithoutDriverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_order_sentCreateWithoutDriverInputSchema),
					z.lazy(() => delivery_order_sentCreateWithoutDriverInputSchema).array(),
					z.lazy(() => delivery_order_sentUncheckedCreateWithoutDriverInputSchema),
					z.lazy(() => delivery_order_sentUncheckedCreateWithoutDriverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_order_sentCreateOrConnectWithoutDriverInputSchema),
					z.lazy(() => delivery_order_sentCreateOrConnectWithoutDriverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_order_sentCreateManyDriverInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_order_sentUncheckedCreateNestedManyWithoutDriverInputSchema;
