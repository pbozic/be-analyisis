import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutScoring_pointsInputSchema } from './taxi_ordersCreateWithoutScoring_pointsInputSchema';
import { taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema } from './taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema';
import { taxi_ordersCreateOrConnectWithoutScoring_pointsInputSchema } from './taxi_ordersCreateOrConnectWithoutScoring_pointsInputSchema';
import { taxi_ordersUpsertWithoutScoring_pointsInputSchema } from './taxi_ordersUpsertWithoutScoring_pointsInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema } from './taxi_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema';
import { taxi_ordersUpdateWithoutScoring_pointsInputSchema } from './taxi_ordersUpdateWithoutScoring_pointsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema } from './taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema';

export const taxi_ordersUpdateOneWithoutScoring_pointsNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateOneWithoutScoring_pointsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutScoring_pointsInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutScoring_pointsInputSchema).optional(),
			upsert: z.lazy(() => taxi_ordersUpsertWithoutScoring_pointsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => taxi_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema),
					z.lazy(() => taxi_ordersUpdateWithoutScoring_pointsInputSchema),
					z.lazy(() => taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersUpdateOneWithoutScoring_pointsNestedInputSchema;
