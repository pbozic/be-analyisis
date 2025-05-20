import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_favorite_businessesCreateManyInputSchema } from '../inputTypeSchemas/user_favorite_businessesCreateManyInputSchema';

export const user_favorite_businessesCreateManyArgsSchema: z.ZodType<Prisma.user_favorite_businessesCreateManyArgs> = z
	.object({
		data: z.union([
			user_favorite_businessesCreateManyInputSchema,
			user_favorite_businessesCreateManyInputSchema.array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default user_favorite_businessesCreateManyArgsSchema;
