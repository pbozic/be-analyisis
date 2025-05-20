import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { businessUpdateManyWithoutFinancesNestedInputSchema } from './businessUpdateManyWithoutFinancesNestedInputSchema';

export const financesUpdateInputSchema: z.ZodType<Prisma.financesUpdateInput> = z
	.object({
		finance_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		bank_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		account_holder: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		account_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		payment_preferences: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		business: z.lazy(() => businessUpdateManyWithoutFinancesNestedInputSchema).optional(),
	})
	.strict();

export default financesUpdateInputSchema;
