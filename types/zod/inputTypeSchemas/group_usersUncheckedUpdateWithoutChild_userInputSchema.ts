import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { allowancesUncheckedUpdateOneWithoutUserNestedInputSchema } from './allowancesUncheckedUpdateOneWithoutUserNestedInputSchema';

export const group_usersUncheckedUpdateWithoutChild_userInputSchema: z.ZodType<Prisma.group_usersUncheckedUpdateWithoutChild_userInput> =
	z
		.object({
			group_user_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			parent_user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			allowance: z.lazy(() => allowancesUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
		})
		.strict();

export default group_usersUncheckedUpdateWithoutChild_userInputSchema;
