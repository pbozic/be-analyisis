import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesUpdateWithoutBusiness_userInputSchema } from './allowancesUpdateWithoutBusiness_userInputSchema';
import { allowancesUncheckedUpdateWithoutBusiness_userInputSchema } from './allowancesUncheckedUpdateWithoutBusiness_userInputSchema';
import { allowancesCreateWithoutBusiness_userInputSchema } from './allowancesCreateWithoutBusiness_userInputSchema';
import { allowancesUncheckedCreateWithoutBusiness_userInputSchema } from './allowancesUncheckedCreateWithoutBusiness_userInputSchema';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';

export const allowancesUpsertWithoutBusiness_userInputSchema: z.ZodType<Prisma.allowancesUpsertWithoutBusiness_userInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => allowancesUpdateWithoutBusiness_userInputSchema),
				z.lazy(() => allowancesUncheckedUpdateWithoutBusiness_userInputSchema),
			]),
			create: z.union([
				z.lazy(() => allowancesCreateWithoutBusiness_userInputSchema),
				z.lazy(() => allowancesUncheckedCreateWithoutBusiness_userInputSchema),
			]),
			where: z.lazy(() => allowancesWhereInputSchema).optional(),
		})
		.strict();

export default allowancesUpsertWithoutBusiness_userInputSchema;
