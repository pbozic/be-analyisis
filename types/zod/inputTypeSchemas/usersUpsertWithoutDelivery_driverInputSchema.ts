import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutDelivery_driverInputSchema } from './usersUpdateWithoutDelivery_driverInputSchema';
import { usersUncheckedUpdateWithoutDelivery_driverInputSchema } from './usersUncheckedUpdateWithoutDelivery_driverInputSchema';
import { usersCreateWithoutDelivery_driverInputSchema } from './usersCreateWithoutDelivery_driverInputSchema';
import { usersUncheckedCreateWithoutDelivery_driverInputSchema } from './usersUncheckedCreateWithoutDelivery_driverInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutDelivery_driverInputSchema: z.ZodType<Prisma.usersUpsertWithoutDelivery_driverInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutDelivery_driverInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutDelivery_driverInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutDelivery_driverInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutDelivery_driverInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutDelivery_driverInputSchema;
