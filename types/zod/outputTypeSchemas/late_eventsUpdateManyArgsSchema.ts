import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { late_eventsUpdateManyMutationInputSchema } from '../inputTypeSchemas/late_eventsUpdateManyMutationInputSchema';
import { late_eventsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/late_eventsUncheckedUpdateManyInputSchema';
import { late_eventsWhereInputSchema } from '../inputTypeSchemas/late_eventsWhereInputSchema';

export const late_eventsUpdateManyArgsSchema: z.ZodType<Prisma.late_eventsUpdateManyArgs> = z
	.object({
		data: z.union([late_eventsUpdateManyMutationInputSchema, late_eventsUncheckedUpdateManyInputSchema]),
		where: late_eventsWhereInputSchema.optional(),
	})
	.strict();

export default late_eventsUpdateManyArgsSchema;
