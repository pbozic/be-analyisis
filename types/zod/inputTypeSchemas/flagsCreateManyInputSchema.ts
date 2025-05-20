import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const flagsCreateManyInputSchema: z.ZodType<Prisma.flagsCreateManyInput> = z
	.object({
		flag_id: z.string().uuid().optional(),
		name: z.string(),
		status: z.boolean().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default flagsCreateManyInputSchema;
