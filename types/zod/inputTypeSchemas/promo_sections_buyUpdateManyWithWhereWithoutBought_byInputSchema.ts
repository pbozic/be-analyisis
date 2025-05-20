import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyScalarWhereInputSchema } from './promo_sections_buyScalarWhereInputSchema';
import { promo_sections_buyUpdateManyMutationInputSchema } from './promo_sections_buyUpdateManyMutationInputSchema';
import { promo_sections_buyUncheckedUpdateManyWithoutBought_byInputSchema } from './promo_sections_buyUncheckedUpdateManyWithoutBought_byInputSchema';

export const promo_sections_buyUpdateManyWithWhereWithoutBought_byInputSchema: z.ZodType<Prisma.promo_sections_buyUpdateManyWithWhereWithoutBought_byInput> =
	z
		.object({
			where: z.lazy(() => promo_sections_buyScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => promo_sections_buyUpdateManyMutationInputSchema),
				z.lazy(() => promo_sections_buyUncheckedUpdateManyWithoutBought_byInputSchema),
			]),
		})
		.strict();

export default promo_sections_buyUpdateManyWithWhereWithoutBought_byInputSchema;
