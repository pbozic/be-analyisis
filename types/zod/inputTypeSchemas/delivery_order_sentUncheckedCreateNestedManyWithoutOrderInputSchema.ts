import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateWithoutOrderInputSchema } from './delivery_order_sentCreateWithoutOrderInputSchema';
import { delivery_order_sentUncheckedCreateWithoutOrderInputSchema } from './delivery_order_sentUncheckedCreateWithoutOrderInputSchema';
import { delivery_order_sentCreateOrConnectWithoutOrderInputSchema } from './delivery_order_sentCreateOrConnectWithoutOrderInputSchema';
import { delivery_order_sentCreateManyOrderInputEnvelopeSchema } from './delivery_order_sentCreateManyOrderInputEnvelopeSchema';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';

export const delivery_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.delivery_order_sentUncheckedCreateNestedManyWithoutOrderInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_order_sentCreateWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentCreateWithoutOrderInputSchema).array(),
					z.lazy(() => delivery_order_sentUncheckedCreateWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentUncheckedCreateWithoutOrderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_order_sentCreateOrConnectWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentCreateOrConnectWithoutOrderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_order_sentCreateManyOrderInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema;
