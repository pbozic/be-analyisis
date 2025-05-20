import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutReservationsInputSchema } from './businessUpdateWithoutReservationsInputSchema';
import { businessUncheckedUpdateWithoutReservationsInputSchema } from './businessUncheckedUpdateWithoutReservationsInputSchema';
import { businessCreateWithoutReservationsInputSchema } from './businessCreateWithoutReservationsInputSchema';
import { businessUncheckedCreateWithoutReservationsInputSchema } from './businessUncheckedCreateWithoutReservationsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutReservationsInputSchema: z.ZodType<Prisma.businessUpsertWithoutReservationsInput> = z
	.object({
		update: z.union([
			z.lazy(() => businessUpdateWithoutReservationsInputSchema),
			z.lazy(() => businessUncheckedUpdateWithoutReservationsInputSchema),
		]),
		create: z.union([
			z.lazy(() => businessCreateWithoutReservationsInputSchema),
			z.lazy(() => businessUncheckedCreateWithoutReservationsInputSchema),
		]),
		where: z.lazy(() => businessWhereInputSchema).optional(),
	})
	.strict();

export default businessUpsertWithoutReservationsInputSchema;
