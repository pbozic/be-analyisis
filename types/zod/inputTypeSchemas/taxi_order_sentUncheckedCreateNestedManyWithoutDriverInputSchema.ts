import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentCreateWithoutDriverInputSchema } from './taxi_order_sentCreateWithoutDriverInputSchema';
import { taxi_order_sentUncheckedCreateWithoutDriverInputSchema } from './taxi_order_sentUncheckedCreateWithoutDriverInputSchema';
import { taxi_order_sentCreateOrConnectWithoutDriverInputSchema } from './taxi_order_sentCreateOrConnectWithoutDriverInputSchema';
import { taxi_order_sentCreateManyDriverInputEnvelopeSchema } from './taxi_order_sentCreateManyDriverInputEnvelopeSchema';
import { taxi_order_sentWhereUniqueInputSchema } from './taxi_order_sentWhereUniqueInputSchema';

export const taxi_order_sentUncheckedCreateNestedManyWithoutDriverInputSchema: z.ZodType<Prisma.taxi_order_sentUncheckedCreateNestedManyWithoutDriverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_order_sentCreateWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentCreateWithoutDriverInputSchema).array(),
					z.lazy(() => taxi_order_sentUncheckedCreateWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentUncheckedCreateWithoutDriverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => taxi_order_sentCreateOrConnectWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentCreateOrConnectWithoutDriverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => taxi_order_sentCreateManyDriverInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default taxi_order_sentUncheckedCreateNestedManyWithoutDriverInputSchema;
