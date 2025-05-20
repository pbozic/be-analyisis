import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutUserInputSchema } from './delivery_ordersCreateWithoutUserInputSchema';
import { delivery_ordersUncheckedCreateWithoutUserInputSchema } from './delivery_ordersUncheckedCreateWithoutUserInputSchema';
import { delivery_ordersCreateOrConnectWithoutUserInputSchema } from './delivery_ordersCreateOrConnectWithoutUserInputSchema';
import { delivery_ordersCreateManyUserInputEnvelopeSchema } from './delivery_ordersCreateManyUserInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutUserInputSchema),
					z.lazy(() => delivery_ordersCreateWithoutUserInputSchema).array(),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_ordersCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => delivery_ordersCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_ordersCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersCreateNestedManyWithoutUserInputSchema;
