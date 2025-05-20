import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereInputSchema } from './late_eventsWhereInputSchema';

export const Late_eventsListRelationFilterSchema: z.ZodType<Prisma.Late_eventsListRelationFilter> = z
	.object({
		every: z.lazy(() => late_eventsWhereInputSchema).optional(),
		some: z.lazy(() => late_eventsWhereInputSchema).optional(),
		none: z.lazy(() => late_eventsWhereInputSchema).optional(),
	})
	.strict();

export default Late_eventsListRelationFilterSchema;
