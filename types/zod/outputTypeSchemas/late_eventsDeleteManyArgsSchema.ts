import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { late_eventsWhereInputSchema } from '../inputTypeSchemas/late_eventsWhereInputSchema';

export const late_eventsDeleteManyArgsSchema: z.ZodType<Prisma.late_eventsDeleteManyArgs> = z
	.object({
		where: late_eventsWhereInputSchema.optional(),
	})
	.strict();

export default late_eventsDeleteManyArgsSchema;
