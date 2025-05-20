import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutParent_userNestedInputSchema } from './usersUpdateOneRequiredWithoutParent_userNestedInputSchema';
import { allowancesUpdateOneWithoutUserNestedInputSchema } from './allowancesUpdateOneWithoutUserNestedInputSchema';

export const group_usersUpdateWithoutParent_userInputSchema: z.ZodType<Prisma.group_usersUpdateWithoutParent_userInput> =
	z
		.object({
			group_user_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			child_user: z.lazy(() => usersUpdateOneRequiredWithoutParent_userNestedInputSchema).optional(),
			allowance: z.lazy(() => allowancesUpdateOneWithoutUserNestedInputSchema).optional(),
		})
		.strict();

export default group_usersUpdateWithoutParent_userInputSchema;
