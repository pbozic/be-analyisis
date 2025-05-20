import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { EnumLOST_FOUND_STATUSFieldUpdateOperationsInputSchema } from './EnumLOST_FOUND_STATUSFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const lost_itemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.lost_itemsUncheckedUpdateManyInput> = z
	.object({
		lost_item_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		user_id: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
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
	})
	.strict();

export default lost_itemsUncheckedUpdateManyInputSchema;
