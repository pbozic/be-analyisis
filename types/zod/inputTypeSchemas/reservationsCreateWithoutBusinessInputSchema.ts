import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';
import { usersCreateNestedOneWithoutReservationsInputSchema } from './usersCreateNestedOneWithoutReservationsInputSchema';

export const reservationsCreateWithoutBusinessInputSchema: z.ZodType<Prisma.reservationsCreateWithoutBusinessInput> = z
	.object({
		reservation_id: z.string().uuid().optional(),
		seats: z.number().int(),
		date: z.coerce.date(),
		time: z.string(),
		datetime: z.coerce.date().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		status: z.lazy(() => RESERVATION_STATUSSchema).optional(),
		table: z.number().int().optional().nullable(),
		user: z.lazy(() => usersCreateNestedOneWithoutReservationsInputSchema),
	})
	.strict();

export default reservationsCreateWithoutBusinessInputSchema;
