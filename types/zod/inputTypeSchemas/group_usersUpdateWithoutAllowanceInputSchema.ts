import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutChild_usersNestedInputSchema } from './usersUpdateOneRequiredWithoutChild_usersNestedInputSchema';
import { usersUpdateOneRequiredWithoutParent_userNestedInputSchema } from './usersUpdateOneRequiredWithoutParent_userNestedInputSchema';

export const group_usersUpdateWithoutAllowanceInputSchema: z.ZodType<Prisma.group_usersUpdateWithoutAllowanceInput> = z
	.object({
		group_user_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
		parent_user: z.lazy(() => usersUpdateOneRequiredWithoutChild_usersNestedInputSchema).optional(),
		child_user: z.lazy(() => usersUpdateOneRequiredWithoutParent_userNestedInputSchema).optional(),
	})
	.strict();

export default group_usersUpdateWithoutAllowanceInputSchema;
