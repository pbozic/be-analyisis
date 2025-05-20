import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutParent_orderInputSchema } from './taxi_ordersCreateWithoutParent_orderInputSchema';
import { taxi_ordersUncheckedCreateWithoutParent_orderInputSchema } from './taxi_ordersUncheckedCreateWithoutParent_orderInputSchema';
import { taxi_ordersCreateOrConnectWithoutParent_orderInputSchema } from './taxi_ordersCreateOrConnectWithoutParent_orderInputSchema';
import { taxi_ordersCreateManyParent_orderInputEnvelopeSchema } from './taxi_ordersCreateManyParent_orderInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersUncheckedCreateNestedManyWithoutParent_orderInputSchema: z.ZodType<Prisma.taxi_ordersUncheckedCreateNestedManyWithoutParent_orderInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutParent_orderInputSchema),
					z.lazy(() => taxi_ordersCreateWithoutParent_orderInputSchema).array(),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutParent_orderInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutParent_orderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => taxi_ordersCreateOrConnectWithoutParent_orderInputSchema),
					z.lazy(() => taxi_ordersCreateOrConnectWithoutParent_orderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => taxi_ordersCreateManyParent_orderInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => taxi_ordersWhereUniqueInputSchema),
					z.lazy(() => taxi_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersUncheckedCreateNestedManyWithoutParent_orderInputSchema;
