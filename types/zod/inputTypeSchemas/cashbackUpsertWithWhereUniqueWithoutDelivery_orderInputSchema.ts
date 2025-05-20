import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithoutDelivery_orderInputSchema } from './cashbackUpdateWithoutDelivery_orderInputSchema';
import { cashbackUncheckedUpdateWithoutDelivery_orderInputSchema } from './cashbackUncheckedUpdateWithoutDelivery_orderInputSchema';
import { cashbackCreateWithoutDelivery_orderInputSchema } from './cashbackCreateWithoutDelivery_orderInputSchema';
import { cashbackUncheckedCreateWithoutDelivery_orderInputSchema } from './cashbackUncheckedCreateWithoutDelivery_orderInputSchema';

export const cashbackUpsertWithWhereUniqueWithoutDelivery_orderInputSchema: z.ZodType<Prisma.cashbackUpsertWithWhereUniqueWithoutDelivery_orderInput> =
	z
		.object({
			where: z.lazy(() => cashbackWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => cashbackUpdateWithoutDelivery_orderInputSchema),
				z.lazy(() => cashbackUncheckedUpdateWithoutDelivery_orderInputSchema),
			]),
			create: z.union([
				z.lazy(() => cashbackCreateWithoutDelivery_orderInputSchema),
				z.lazy(() => cashbackUncheckedCreateWithoutDelivery_orderInputSchema),
			]),
		})
		.strict();

export default cashbackUpsertWithWhereUniqueWithoutDelivery_orderInputSchema;
