import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { late_eventsSelectSchema } from '../inputTypeSchemas/late_eventsSelectSchema';
import { late_eventsIncludeSchema } from '../inputTypeSchemas/late_eventsIncludeSchema';

export const late_eventsArgsSchema: z.ZodType<Prisma.late_eventsDefaultArgs> = z
	.object({
		select: z.lazy(() => late_eventsSelectSchema).optional(),
		include: z.lazy(() => late_eventsIncludeSchema).optional(),
	})
	.strict();

export default late_eventsArgsSchema;
