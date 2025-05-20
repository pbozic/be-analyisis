import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesCreateWithoutBusinessInputSchema } from './order_lobbiesCreateWithoutBusinessInputSchema';
import { order_lobbiesUncheckedCreateWithoutBusinessInputSchema } from './order_lobbiesUncheckedCreateWithoutBusinessInputSchema';

export const order_lobbiesCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.order_lobbiesCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => order_lobbiesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => order_lobbiesCreateWithoutBusinessInputSchema),
				z.lazy(() => order_lobbiesUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default order_lobbiesCreateOrConnectWithoutBusinessInputSchema;
