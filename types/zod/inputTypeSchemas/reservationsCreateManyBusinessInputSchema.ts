import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';

export const reservationsCreateManyBusinessInputSchema: z.ZodType<Prisma.reservationsCreateManyBusinessInput> = z
	.object({
		reservation_id: z.string().uuid().optional(),
		seats: z.number().int(),
		date: z.coerce.date(),
		time: z.string(),
		datetime: z.coerce.date().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		user_id: z.string(),
		status: z.lazy(() => RESERVATION_STATUSSchema).optional(),
		table: z.number().int().optional().nullable(),
	})
	.strict();

export default reservationsCreateManyBusinessInputSchema;
