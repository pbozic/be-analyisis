import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';

export const user_favorite_businessesIncludeSchema: z.ZodType<Prisma.user_favorite_businessesInclude> = z
	.object({
		users: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		businesses: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
	})
	.strict();

export default user_favorite_businessesIncludeSchema;
