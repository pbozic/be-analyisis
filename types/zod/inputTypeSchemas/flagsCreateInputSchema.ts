import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyCreateNestedManyWithoutFlagInputSchema } from './flag_historyCreateNestedManyWithoutFlagInputSchema';

export const flagsCreateInputSchema: z.ZodType<Prisma.flagsCreateInput> = z
	.object({
		flag_id: z.string().uuid().optional(),
		name: z.string(),
		status: z.boolean().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		history: z.lazy(() => flag_historyCreateNestedManyWithoutFlagInputSchema).optional(),
	})
	.strict();

export default flagsCreateInputSchema;
