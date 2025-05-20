import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsWhereInputSchema } from './reservationsWhereInputSchema';

export const ReservationsListRelationFilterSchema: z.ZodType<Prisma.ReservationsListRelationFilter> = z
	.object({
		every: z.lazy(() => reservationsWhereInputSchema).optional(),
		some: z.lazy(() => reservationsWhereInputSchema).optional(),
		none: z.lazy(() => reservationsWhereInputSchema).optional(),
	})
	.strict();

export default ReservationsListRelationFilterSchema;
