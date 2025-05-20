import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsIncludeSchema } from '../inputTypeSchemas/account_actionsIncludeSchema';
import { account_actionsWhereUniqueInputSchema } from '../inputTypeSchemas/account_actionsWhereUniqueInputSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const account_actionsSelectSchema: z.ZodType<Prisma.account_actionsSelect> = z
	.object({
		account_action_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		action_creator_user_id: z.boolean().optional(),
		reason: z.boolean().optional(),
		action: z.boolean().optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		action_creator: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export const account_actionsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.account_actionsFindUniqueOrThrowArgs> = z
	.object({
		select: account_actionsSelectSchema.optional(),
		include: account_actionsIncludeSchema.optional(),
		where: account_actionsWhereUniqueInputSchema,
	})
	.strict();

export default account_actionsFindUniqueOrThrowArgsSchema;
