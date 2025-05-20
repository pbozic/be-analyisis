import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyCreateManyInputSchema } from '../inputTypeSchemas/flag_historyCreateManyInputSchema';

export const flag_historyCreateManyArgsSchema: z.ZodType<Prisma.flag_historyCreateManyArgs> = z
	.object({
		data: z.union([flag_historyCreateManyInputSchema, flag_historyCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default flag_historyCreateManyArgsSchema;
