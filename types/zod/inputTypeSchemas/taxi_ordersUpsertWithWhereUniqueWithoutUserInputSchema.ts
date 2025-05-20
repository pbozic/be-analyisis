import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutUserInputSchema } from './taxi_ordersUpdateWithoutUserInputSchema';
import { taxi_ordersUncheckedUpdateWithoutUserInputSchema } from './taxi_ordersUncheckedUpdateWithoutUserInputSchema';
import { taxi_ordersCreateWithoutUserInputSchema } from './taxi_ordersCreateWithoutUserInputSchema';
import { taxi_ordersUncheckedCreateWithoutUserInputSchema } from './taxi_ordersUncheckedCreateWithoutUserInputSchema';

export const taxi_ordersUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutUserInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutUserInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpsertWithWhereUniqueWithoutUserInputSchema;
