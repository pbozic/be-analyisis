import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackScalarWhereInputSchema } from './cashbackScalarWhereInputSchema';
import { cashbackUpdateManyMutationInputSchema } from './cashbackUpdateManyMutationInputSchema';
import { cashbackUncheckedUpdateManyWithoutDelivery_orderInputSchema } from './cashbackUncheckedUpdateManyWithoutDelivery_orderInputSchema';

export const cashbackUpdateManyWithWhereWithoutDelivery_orderInputSchema: z.ZodType<Prisma.cashbackUpdateManyWithWhereWithoutDelivery_orderInput> =
	z
		.object({
			where: z.lazy(() => cashbackScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => cashbackUpdateManyMutationInputSchema),
				z.lazy(() => cashbackUncheckedUpdateManyWithoutDelivery_orderInputSchema),
			]),
		})
		.strict();

export default cashbackUpdateManyWithWhereWithoutDelivery_orderInputSchema;
