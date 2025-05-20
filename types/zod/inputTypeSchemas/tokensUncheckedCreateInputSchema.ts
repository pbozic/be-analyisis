import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenTypeSchema } from './TokenTypeSchema';

export const tokensUncheckedCreateInputSchema: z.ZodType<Prisma.tokensUncheckedCreateInput> = z
	.object({
		token_id: z.string().uuid().optional(),
		user_id: z.string(),
		type: z.lazy(() => TokenTypeSchema).optional(),
		token: z.string(),
		expires_at: z.coerce.date(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		active: z.boolean().optional(),
	})
	.strict();

export default tokensUncheckedCreateInputSchema;
