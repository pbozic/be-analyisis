import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenTypeSchema } from './TokenTypeSchema';
import { usersCreateNestedOneWithoutTokensInputSchema } from './usersCreateNestedOneWithoutTokensInputSchema';

export const tokensCreateInputSchema: z.ZodType<Prisma.tokensCreateInput> = z
	.object({
		token_id: z.string().uuid().optional(),
		type: z.lazy(() => TokenTypeSchema).optional(),
		token: z.string(),
		expires_at: z.coerce.date(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		active: z.boolean().optional(),
		users: z.lazy(() => usersCreateNestedOneWithoutTokensInputSchema),
	})
	.strict();

export default tokensCreateInputSchema;
