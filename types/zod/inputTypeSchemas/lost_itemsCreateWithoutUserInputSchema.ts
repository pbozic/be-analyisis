import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { documentsCreateNestedManyWithoutLost_itemsInputSchema } from './documentsCreateNestedManyWithoutLost_itemsInputSchema';

export const lost_itemsCreateWithoutUserInputSchema: z.ZodType<Prisma.lost_itemsCreateWithoutUserInput> = z
	.object({
		lost_item_id: z.string().uuid().optional(),
		status: z.lazy(() => LOST_FOUND_STATUSSchema).optional(),
		description: z.string(),
		found: z.boolean().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		documents: z.lazy(() => documentsCreateNestedManyWithoutLost_itemsInputSchema).optional(),
	})
	.strict();

export default lost_itemsCreateWithoutUserInputSchema;
