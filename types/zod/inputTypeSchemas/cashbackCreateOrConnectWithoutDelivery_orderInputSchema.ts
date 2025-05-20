import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackCreateWithoutDelivery_orderInputSchema } from './cashbackCreateWithoutDelivery_orderInputSchema';
import { cashbackUncheckedCreateWithoutDelivery_orderInputSchema } from './cashbackUncheckedCreateWithoutDelivery_orderInputSchema';

export const cashbackCreateOrConnectWithoutDelivery_orderInputSchema: z.ZodType<Prisma.cashbackCreateOrConnectWithoutDelivery_orderInput> =
	z
		.object({
			where: z.lazy(() => cashbackWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => cashbackCreateWithoutDelivery_orderInputSchema),
				z.lazy(() => cashbackUncheckedCreateWithoutDelivery_orderInputSchema),
			]),
		})
		.strict();

export default cashbackCreateOrConnectWithoutDelivery_orderInputSchema;
