import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutUserInputSchema } from './delivery_ordersUpdateWithoutUserInputSchema';
import { delivery_ordersUncheckedUpdateWithoutUserInputSchema } from './delivery_ordersUncheckedUpdateWithoutUserInputSchema';
import { delivery_ordersCreateWithoutUserInputSchema } from './delivery_ordersCreateWithoutUserInputSchema';
import { delivery_ordersUncheckedCreateWithoutUserInputSchema } from './delivery_ordersUncheckedCreateWithoutUserInputSchema';

export const delivery_ordersUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutUserInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutUserInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpsertWithWhereUniqueWithoutUserInputSchema;
