import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';

export const tokensSelectSchema: z.ZodType<Prisma.tokensSelect> = z
	.object({
		token_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		type: z.boolean().optional(),
		token: z.boolean().optional(),
		expires_at: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		active: z.boolean().optional(),
		users: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export default tokensSelectSchema;
