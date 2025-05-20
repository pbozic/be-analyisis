import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';

export const user_rolesIncludeSchema: z.ZodType<Prisma.user_rolesInclude> = z
	.object({
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export default user_rolesIncludeSchema;
