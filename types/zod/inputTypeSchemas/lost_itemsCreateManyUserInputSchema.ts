import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';

export const lost_itemsCreateManyUserInputSchema: z.ZodType<Prisma.lost_itemsCreateManyUserInput> = z
	.object({
		lost_item_id: z.string().uuid().optional(),
		status: z.lazy(() => LOST_FOUND_STATUSSchema).optional(),
		description: z.string(),
		found: z.boolean().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default lost_itemsCreateManyUserInputSchema;
