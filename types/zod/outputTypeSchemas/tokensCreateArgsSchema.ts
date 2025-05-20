import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { tokensIncludeSchema } from '../inputTypeSchemas/tokensIncludeSchema';
import { tokensCreateInputSchema } from '../inputTypeSchemas/tokensCreateInputSchema';
import { tokensUncheckedCreateInputSchema } from '../inputTypeSchemas/tokensUncheckedCreateInputSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const tokensCreateArgsSchema: z.ZodType<Prisma.tokensCreateArgs> = z
	.object({
		select: tokensSelectSchema.optional(),
		include: tokensIncludeSchema.optional(),
		data: z.union([tokensCreateInputSchema, tokensUncheckedCreateInputSchema]),
	})
	.strict();

export default tokensCreateArgsSchema;
