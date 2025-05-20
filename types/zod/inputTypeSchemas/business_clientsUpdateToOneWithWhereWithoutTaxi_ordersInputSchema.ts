import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsWhereInputSchema } from './business_clientsWhereInputSchema';
import { business_clientsUpdateWithoutTaxi_ordersInputSchema } from './business_clientsUpdateWithoutTaxi_ordersInputSchema';
import { business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema } from './business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const business_clientsUpdateToOneWithWhereWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_clientsUpdateToOneWithWhereWithoutTaxi_ordersInput> =
	z
		.object({
			where: z.lazy(() => business_clientsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => business_clientsUpdateWithoutTaxi_ordersInputSchema),
				z.lazy(() => business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema),
			]),
		})
		.strict();

export default business_clientsUpdateToOneWithWhereWithoutTaxi_ordersInputSchema;
