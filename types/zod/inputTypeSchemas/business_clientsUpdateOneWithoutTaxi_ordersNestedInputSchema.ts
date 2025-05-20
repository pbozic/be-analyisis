import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsCreateWithoutTaxi_ordersInputSchema } from './business_clientsCreateWithoutTaxi_ordersInputSchema';
import { business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema } from './business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema';
import { business_clientsCreateOrConnectWithoutTaxi_ordersInputSchema } from './business_clientsCreateOrConnectWithoutTaxi_ordersInputSchema';
import { business_clientsUpsertWithoutTaxi_ordersInputSchema } from './business_clientsUpsertWithoutTaxi_ordersInputSchema';
import { business_clientsWhereInputSchema } from './business_clientsWhereInputSchema';
import { business_clientsWhereUniqueInputSchema } from './business_clientsWhereUniqueInputSchema';
import { business_clientsUpdateToOneWithWhereWithoutTaxi_ordersInputSchema } from './business_clientsUpdateToOneWithWhereWithoutTaxi_ordersInputSchema';
import { business_clientsUpdateWithoutTaxi_ordersInputSchema } from './business_clientsUpdateWithoutTaxi_ordersInputSchema';
import { business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema } from './business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const business_clientsUpdateOneWithoutTaxi_ordersNestedInputSchema: z.ZodType<Prisma.business_clientsUpdateOneWithoutTaxi_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => business_clientsCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => business_clientsCreateOrConnectWithoutTaxi_ordersInputSchema).optional(),
			upsert: z.lazy(() => business_clientsUpsertWithoutTaxi_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => business_clientsWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => business_clientsWhereInputSchema)]).optional(),
			connect: z.lazy(() => business_clientsWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => business_clientsUpdateToOneWithWhereWithoutTaxi_ordersInputSchema),
					z.lazy(() => business_clientsUpdateWithoutTaxi_ordersInputSchema),
					z.lazy(() => business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default business_clientsUpdateOneWithoutTaxi_ordersNestedInputSchema;
