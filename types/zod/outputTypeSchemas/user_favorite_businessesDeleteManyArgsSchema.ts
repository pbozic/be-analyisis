import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_favorite_businessesWhereInputSchema } from '../inputTypeSchemas/user_favorite_businessesWhereInputSchema';

export const user_favorite_businessesDeleteManyArgsSchema: z.ZodType<Prisma.user_favorite_businessesDeleteManyArgs> = z
	.object({
		where: user_favorite_businessesWhereInputSchema.optional(),
	})
	.strict();

export default user_favorite_businessesDeleteManyArgsSchema;
