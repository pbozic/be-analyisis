import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutDaily_meals_subscribersInputSchema } from './businessUpdateWithoutDaily_meals_subscribersInputSchema';
import { businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema } from './businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema';

export const businessUpdateToOneWithWhereWithoutDaily_meals_subscribersInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutDaily_meals_subscribersInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutDaily_meals_subscribersInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutDaily_meals_subscribersInputSchema;
