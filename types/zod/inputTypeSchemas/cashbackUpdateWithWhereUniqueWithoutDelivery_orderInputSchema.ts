import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithoutDelivery_orderInputSchema } from './cashbackUpdateWithoutDelivery_orderInputSchema';
import { cashbackUncheckedUpdateWithoutDelivery_orderInputSchema } from './cashbackUncheckedUpdateWithoutDelivery_orderInputSchema';

export const cashbackUpdateWithWhereUniqueWithoutDelivery_orderInputSchema: z.ZodType<Prisma.cashbackUpdateWithWhereUniqueWithoutDelivery_orderInput> =
	z
		.object({
			where: z.lazy(() => cashbackWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => cashbackUpdateWithoutDelivery_orderInputSchema),
				z.lazy(() => cashbackUncheckedUpdateWithoutDelivery_orderInputSchema),
			]),
		})
		.strict();

export default cashbackUpdateWithWhereUniqueWithoutDelivery_orderInputSchema;
