import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutDaily_meal_driversInputSchema } from './businessUpdateWithoutDaily_meal_driversInputSchema';
import { businessUncheckedUpdateWithoutDaily_meal_driversInputSchema } from './businessUncheckedUpdateWithoutDaily_meal_driversInputSchema';

export const businessUpdateToOneWithWhereWithoutDaily_meal_driversInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutDaily_meal_driversInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutDaily_meal_driversInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutDaily_meal_driversInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutDaily_meal_driversInputSchema;
