import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';

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

export default user_favorite_businessesSelectSchema;
