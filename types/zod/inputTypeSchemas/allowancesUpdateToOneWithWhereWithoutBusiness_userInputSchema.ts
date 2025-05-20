import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';
import { allowancesUpdateWithoutBusiness_userInputSchema } from './allowancesUpdateWithoutBusiness_userInputSchema';
import { allowancesUncheckedUpdateWithoutBusiness_userInputSchema } from './allowancesUncheckedUpdateWithoutBusiness_userInputSchema';

export const allowancesUpdateToOneWithWhereWithoutBusiness_userInputSchema: z.ZodType<Prisma.allowancesUpdateToOneWithWhereWithoutBusiness_userInput> =
	z
		.object({
			where: z.lazy(() => allowancesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => allowancesUpdateWithoutBusiness_userInputSchema),
				z.lazy(() => allowancesUncheckedUpdateWithoutBusiness_userInputSchema),
			]),
		})
		.strict();

export default allowancesUpdateToOneWithWhereWithoutBusiness_userInputSchema;
