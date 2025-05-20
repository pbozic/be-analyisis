import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_favorite_businessesIncludeSchema } from '../inputTypeSchemas/user_favorite_businessesIncludeSchema';
import { user_favorite_businessesCreateInputSchema } from '../inputTypeSchemas/user_favorite_businessesCreateInputSchema';
import { user_favorite_businessesUncheckedCreateInputSchema } from '../inputTypeSchemas/user_favorite_businessesUncheckedCreateInputSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_favorite_businessesSelectSchema: z.ZodType<Prisma.user_favorite_businessesSelect> = z
	.object({
		user_favorite_businesses_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		business_type: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		users: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		businesses: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
	})
	.strict();

export const user_favorite_businessesCreateArgsSchema: z.ZodType<Prisma.user_favorite_businessesCreateArgs> = z
	.object({
		select: user_favorite_businessesSelectSchema.optional(),
		include: user_favorite_businessesIncludeSchema.optional(),
		data: z.union([user_favorite_businessesCreateInputSchema, user_favorite_businessesUncheckedCreateInputSchema]),
	})
	.strict();

export default user_favorite_businessesCreateArgsSchema;
