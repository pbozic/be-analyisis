import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_favorite_businessesSelectSchema } from '../inputTypeSchemas/user_favorite_businessesSelectSchema';
import { user_favorite_businessesIncludeSchema } from '../inputTypeSchemas/user_favorite_businessesIncludeSchema';

export const user_favorite_businessesArgsSchema: z.ZodType<Prisma.user_favorite_businessesDefaultArgs> = z
	.object({
		select: z.lazy(() => user_favorite_businessesSelectSchema).optional(),
		include: z.lazy(() => user_favorite_businessesIncludeSchema).optional(),
	})
	.strict();

export default user_favorite_businessesArgsSchema;
