import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutDaily_meals_subscribersInputSchema } from './businessUpdateWithoutDaily_meals_subscribersInputSchema';
import { businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema } from './businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema';
import { businessCreateWithoutDaily_meals_subscribersInputSchema } from './businessCreateWithoutDaily_meals_subscribersInputSchema';
import { businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema } from './businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutDaily_meals_subscribersInputSchema: z.ZodType<Prisma.businessUpsertWithoutDaily_meals_subscribersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => businessUpdateWithoutDaily_meals_subscribersInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutDaily_meals_subscribersInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema),
			]),
			where: z.lazy(() => businessWhereInputSchema).optional(),
		})
		.strict();

export default businessUpsertWithoutDaily_meals_subscribersInputSchema;
