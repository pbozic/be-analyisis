import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutReservationsInputSchema } from './usersUpdateWithoutReservationsInputSchema';
import { usersUncheckedUpdateWithoutReservationsInputSchema } from './usersUncheckedUpdateWithoutReservationsInputSchema';
import { usersCreateWithoutReservationsInputSchema } from './usersCreateWithoutReservationsInputSchema';
import { usersUncheckedCreateWithoutReservationsInputSchema } from './usersUncheckedCreateWithoutReservationsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutReservationsInputSchema: z.ZodType<Prisma.usersUpsertWithoutReservationsInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutReservationsInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutReservationsInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutReservationsInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutReservationsInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutReservationsInputSchema;
