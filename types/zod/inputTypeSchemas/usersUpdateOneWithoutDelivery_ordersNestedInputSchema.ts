import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDelivery_ordersInputSchema } from './usersCreateWithoutDelivery_ordersInputSchema';
import { usersUncheckedCreateWithoutDelivery_ordersInputSchema } from './usersUncheckedCreateWithoutDelivery_ordersInputSchema';
import { usersCreateOrConnectWithoutDelivery_ordersInputSchema } from './usersCreateOrConnectWithoutDelivery_ordersInputSchema';
import { usersUpsertWithoutDelivery_ordersInputSchema } from './usersUpsertWithoutDelivery_ordersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutDelivery_ordersInputSchema } from './usersUpdateToOneWithWhereWithoutDelivery_ordersInputSchema';
import { usersUpdateWithoutDelivery_ordersInputSchema } from './usersUpdateWithoutDelivery_ordersInputSchema';
import { usersUncheckedUpdateWithoutDelivery_ordersInputSchema } from './usersUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const usersUpdateOneWithoutDelivery_ordersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutDelivery_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutDelivery_ordersInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutDelivery_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => usersWhereInputSchema)]).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutDelivery_ordersInputSchema),
					z.lazy(() => usersUpdateWithoutDelivery_ordersInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneWithoutDelivery_ordersNestedInputSchema;
