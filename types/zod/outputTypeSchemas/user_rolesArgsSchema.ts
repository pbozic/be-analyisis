import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesSelectSchema } from '../inputTypeSchemas/user_rolesSelectSchema';
import { user_rolesIncludeSchema } from '../inputTypeSchemas/user_rolesIncludeSchema';

export const user_rolesArgsSchema: z.ZodType<Prisma.user_rolesDefaultArgs> = z
	.object({
		select: z.lazy(() => user_rolesSelectSchema).optional(),
		include: z.lazy(() => user_rolesIncludeSchema).optional(),
	})
	.strict();

export default user_rolesArgsSchema;
