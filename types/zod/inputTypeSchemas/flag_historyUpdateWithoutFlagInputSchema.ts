import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutFlag_changesNestedInputSchema } from './usersUpdateOneRequiredWithoutFlag_changesNestedInputSchema';

export const flag_historyUpdateWithoutFlagInputSchema: z.ZodType<Prisma.flag_historyUpdateWithoutFlagInput> = z
	.object({
		flag_history_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		status: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		user: z.lazy(() => usersUpdateOneRequiredWithoutFlag_changesNestedInputSchema).optional(),
	})
	.strict();

export default flag_historyUpdateWithoutFlagInputSchema;
