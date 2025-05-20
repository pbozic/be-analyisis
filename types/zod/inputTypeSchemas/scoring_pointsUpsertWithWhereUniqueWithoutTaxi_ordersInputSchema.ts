import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithoutTaxi_ordersInputSchema } from './scoring_pointsUpdateWithoutTaxi_ordersInputSchema';
import { scoring_pointsUncheckedUpdateWithoutTaxi_ordersInputSchema } from './scoring_pointsUncheckedUpdateWithoutTaxi_ordersInputSchema';
import { scoring_pointsCreateWithoutTaxi_ordersInputSchema } from './scoring_pointsCreateWithoutTaxi_ordersInputSchema';
import { scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema } from './scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema';

export const scoring_pointsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUpsertWithWhereUniqueWithoutTaxi_ordersInput> =
	z
		.object({
			where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => scoring_pointsUpdateWithoutTaxi_ordersInputSchema),
				z.lazy(() => scoring_pointsUncheckedUpdateWithoutTaxi_ordersInputSchema),
			]),
			create: z.union([
				z.lazy(() => scoring_pointsCreateWithoutTaxi_ordersInputSchema),
				z.lazy(() => scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema),
			]),
		})
		.strict();

export default scoring_pointsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema;
