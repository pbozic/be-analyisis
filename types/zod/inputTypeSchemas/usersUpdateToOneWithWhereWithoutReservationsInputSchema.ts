import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutReservationsInputSchema } from './usersUpdateWithoutReservationsInputSchema';
import { usersUncheckedUpdateWithoutReservationsInputSchema } from './usersUncheckedUpdateWithoutReservationsInputSchema';

export const usersUpdateToOneWithWhereWithoutReservationsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutReservationsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutReservationsInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutReservationsInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutReservationsInputSchema;
