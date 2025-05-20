import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackCreateWithoutTaxi_orderInputSchema } from './cashbackCreateWithoutTaxi_orderInputSchema';
import { cashbackUncheckedCreateWithoutTaxi_orderInputSchema } from './cashbackUncheckedCreateWithoutTaxi_orderInputSchema';

export const cashbackCreateOrConnectWithoutTaxi_orderInputSchema: z.ZodType<Prisma.cashbackCreateOrConnectWithoutTaxi_orderInput> =
	z
		.object({
			where: z.lazy(() => cashbackWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => cashbackCreateWithoutTaxi_orderInputSchema),
				z.lazy(() => cashbackUncheckedCreateWithoutTaxi_orderInputSchema),
			]),
		})
		.strict();

export default cashbackCreateOrConnectWithoutTaxi_orderInputSchema;
