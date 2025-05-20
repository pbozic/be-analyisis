import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsWhereInputSchema } from './driver_activity_logsWhereInputSchema';

export const Driver_activity_logsListRelationFilterSchema: z.ZodType<Prisma.Driver_activity_logsListRelationFilter> = z
	.object({
		every: z.lazy(() => driver_activity_logsWhereInputSchema).optional(),
		some: z.lazy(() => driver_activity_logsWhereInputSchema).optional(),
		none: z.lazy(() => driver_activity_logsWhereInputSchema).optional(),
	})
	.strict();

export default Driver_activity_logsListRelationFilterSchema;
