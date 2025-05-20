import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateWithoutBusinessInputSchema } from './order_lobbiesCreateWithoutBusinessInputSchema';
import { order_lobbiesUncheckedCreateWithoutBusinessInputSchema } from './order_lobbiesUncheckedCreateWithoutBusinessInputSchema';
import { order_lobbiesCreateOrConnectWithoutBusinessInputSchema } from './order_lobbiesCreateOrConnectWithoutBusinessInputSchema';
import { order_lobbiesCreateManyBusinessInputEnvelopeSchema } from './order_lobbiesCreateManyBusinessInputEnvelopeSchema';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';

export const order_lobbiesCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.order_lobbiesCreateNestedManyWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobbiesCreateWithoutBusinessInputSchema),
					z.lazy(() => order_lobbiesCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => order_lobbiesUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => order_lobbiesUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => order_lobbiesCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => order_lobbiesCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => order_lobbiesCreateManyBusinessInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => order_lobbiesWhereUniqueInputSchema),
					z.lazy(() => order_lobbiesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default order_lobbiesCreateNestedManyWithoutBusinessInputSchema;
