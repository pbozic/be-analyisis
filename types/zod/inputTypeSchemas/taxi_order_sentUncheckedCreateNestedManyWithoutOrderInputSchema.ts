import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentCreateWithoutOrderInputSchema } from './taxi_order_sentCreateWithoutOrderInputSchema';
import { taxi_order_sentUncheckedCreateWithoutOrderInputSchema } from './taxi_order_sentUncheckedCreateWithoutOrderInputSchema';
import { taxi_order_sentCreateOrConnectWithoutOrderInputSchema } from './taxi_order_sentCreateOrConnectWithoutOrderInputSchema';
import { taxi_order_sentCreateManyOrderInputEnvelopeSchema } from './taxi_order_sentCreateManyOrderInputEnvelopeSchema';
import { taxi_order_sentWhereUniqueInputSchema } from './taxi_order_sentWhereUniqueInputSchema';

export const taxi_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.taxi_order_sentUncheckedCreateNestedManyWithoutOrderInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_order_sentCreateWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentCreateWithoutOrderInputSchema).array(),
					z.lazy(() => taxi_order_sentUncheckedCreateWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentUncheckedCreateWithoutOrderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => taxi_order_sentCreateOrConnectWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentCreateOrConnectWithoutOrderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => taxi_order_sentCreateManyOrderInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default taxi_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema;
