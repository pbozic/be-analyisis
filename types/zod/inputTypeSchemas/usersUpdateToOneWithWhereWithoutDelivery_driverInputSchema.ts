import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutDelivery_driverInputSchema } from './usersUpdateWithoutDelivery_driverInputSchema';
import { usersUncheckedUpdateWithoutDelivery_driverInputSchema } from './usersUncheckedUpdateWithoutDelivery_driverInputSchema';

export const usersUpdateToOneWithWhereWithoutDelivery_driverInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutDelivery_driverInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutDelivery_driverInputSchema;
