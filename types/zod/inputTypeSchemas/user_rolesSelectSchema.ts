import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';

export const user_rolesSelectSchema: z.ZodType<Prisma.user_rolesSelect> = z
	.object({
		user_roles_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		role: z.boolean().optional(),
		primary: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export default user_rolesSelectSchema;
