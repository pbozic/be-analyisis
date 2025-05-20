import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutChild_usersInputSchema } from './usersCreateNestedOneWithoutChild_usersInputSchema';
import { usersCreateNestedOneWithoutParent_userInputSchema } from './usersCreateNestedOneWithoutParent_userInputSchema';

export const group_usersCreateWithoutAllowanceInputSchema: z.ZodType<Prisma.group_usersCreateWithoutAllowanceInput> = z
	.object({
		group_user_id: z.string().uuid().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		enabled: z.boolean().optional(),
		parent_user: z.lazy(() => usersCreateNestedOneWithoutChild_usersInputSchema),
		child_user: z.lazy(() => usersCreateNestedOneWithoutParent_userInputSchema),
	})
	.strict();

export default group_usersCreateWithoutAllowanceInputSchema;
