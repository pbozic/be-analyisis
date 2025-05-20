import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutBusiness_order_lobbiesInputSchema } from './businessUpdateWithoutBusiness_order_lobbiesInputSchema';
import { businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema } from './businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema';

export const businessUpdateToOneWithWhereWithoutBusiness_order_lobbiesInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutBusiness_order_lobbiesInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutBusiness_order_lobbiesInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutBusiness_order_lobbiesInputSchema;
