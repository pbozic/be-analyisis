import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutDelivery_driverInputSchema } from './usersCreateWithoutDelivery_driverInputSchema';
import { usersUncheckedCreateWithoutDelivery_driverInputSchema } from './usersUncheckedCreateWithoutDelivery_driverInputSchema';

export const usersCreateOrConnectWithoutDelivery_driverInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutDelivery_driverInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutDelivery_driverInputSchema;
