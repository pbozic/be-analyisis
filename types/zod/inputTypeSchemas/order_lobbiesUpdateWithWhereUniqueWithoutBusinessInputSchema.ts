import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesUpdateWithoutBusinessInputSchema } from './order_lobbiesUpdateWithoutBusinessInputSchema';
import { order_lobbiesUncheckedUpdateWithoutBusinessInputSchema } from './order_lobbiesUncheckedUpdateWithoutBusinessInputSchema';

export const order_lobbiesUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.order_lobbiesUpdateWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => order_lobbiesWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => order_lobbiesUpdateWithoutBusinessInputSchema),
				z.lazy(() => order_lobbiesUncheckedUpdateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default order_lobbiesUpdateWithWhereUniqueWithoutBusinessInputSchema;
