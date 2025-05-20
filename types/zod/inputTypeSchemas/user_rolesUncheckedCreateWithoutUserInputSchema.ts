import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { USER_ROLESSchema } from './USER_ROLESSchema';

export const user_rolesUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.user_rolesUncheckedCreateWithoutUserInput> =
	z
		.object({
			user_roles_id: z.string().uuid().optional(),
			role: z.lazy(() => USER_ROLESSchema).optional(),
			primary: z.boolean().optional().nullable(),
		})
		.strict();

export default user_rolesUncheckedCreateWithoutUserInputSchema;
