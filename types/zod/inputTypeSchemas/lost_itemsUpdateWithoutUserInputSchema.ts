import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { EnumLOST_FOUND_STATUSFieldUpdateOperationsInputSchema } from './EnumLOST_FOUND_STATUSFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { documentsUpdateManyWithoutLost_itemsNestedInputSchema } from './documentsUpdateManyWithoutLost_itemsNestedInputSchema';

export const lost_itemsUpdateWithoutUserInputSchema: z.ZodType<Prisma.lost_itemsUpdateWithoutUserInput> = z
	.object({
		lost_item_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		status: z
			.union([
				z.lazy(() => LOST_FOUND_STATUSSchema),
				z.lazy(() => EnumLOST_FOUND_STATUSFieldUpdateOperationsInputSchema),
			])
			.optional(),
		description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		found: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		documents: z.lazy(() => documentsUpdateManyWithoutLost_itemsNestedInputSchema).optional(),
	})
	.strict();

export default lost_itemsUpdateWithoutUserInputSchema;
