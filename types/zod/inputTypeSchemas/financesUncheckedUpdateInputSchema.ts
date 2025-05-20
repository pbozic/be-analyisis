import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { businessUncheckedUpdateManyWithoutFinancesNestedInputSchema } from './businessUncheckedUpdateManyWithoutFinancesNestedInputSchema';

export const financesUncheckedUpdateInputSchema: z.ZodType<Prisma.financesUncheckedUpdateInput> = z
	.object({
		finance_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		bank_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		account_holder: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		account_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		payment_preferences: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		business: z.lazy(() => businessUncheckedUpdateManyWithoutFinancesNestedInputSchema).optional(),
	})
	.strict();

export default financesUncheckedUpdateInputSchema;
