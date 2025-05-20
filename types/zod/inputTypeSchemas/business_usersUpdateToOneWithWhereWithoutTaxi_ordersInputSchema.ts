import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';
import { business_usersUpdateWithoutTaxi_ordersInputSchema } from './business_usersUpdateWithoutTaxi_ordersInputSchema';
import { business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema } from './business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const business_usersUpdateToOneWithWhereWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_usersUpdateToOneWithWhereWithoutTaxi_ordersInput> =
	z
		.object({
			where: z.lazy(() => business_usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => business_usersUpdateWithoutTaxi_ordersInputSchema),
				z.lazy(() => business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema),
			]),
		})
		.strict();

export default business_usersUpdateToOneWithWhereWithoutTaxi_ordersInputSchema;
