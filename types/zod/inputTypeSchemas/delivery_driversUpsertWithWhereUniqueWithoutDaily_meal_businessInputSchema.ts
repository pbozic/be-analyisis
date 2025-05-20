import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversUpdateWithoutDaily_meal_businessInputSchema } from './delivery_driversUpdateWithoutDaily_meal_businessInputSchema';
import { delivery_driversUncheckedUpdateWithoutDaily_meal_businessInputSchema } from './delivery_driversUncheckedUpdateWithoutDaily_meal_businessInputSchema';
import { delivery_driversCreateWithoutDaily_meal_businessInputSchema } from './delivery_driversCreateWithoutDaily_meal_businessInputSchema';
import { delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema } from './delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema';

export const delivery_driversUpsertWithWhereUniqueWithoutDaily_meal_businessInputSchema: z.ZodType<Prisma.delivery_driversUpsertWithWhereUniqueWithoutDaily_meal_businessInput> =
	z
		.object({
			where: z.lazy(() => delivery_driversWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => delivery_driversUpdateWithoutDaily_meal_businessInputSchema),
				z.lazy(() => delivery_driversUncheckedUpdateWithoutDaily_meal_businessInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_driversCreateWithoutDaily_meal_businessInputSchema),
				z.lazy(() => delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema),
			]),
		})
		.strict();

export default delivery_driversUpsertWithWhereUniqueWithoutDaily_meal_businessInputSchema;
