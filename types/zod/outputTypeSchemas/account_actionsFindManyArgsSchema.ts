import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsIncludeSchema } from '../inputTypeSchemas/account_actionsIncludeSchema';
import { account_actionsWhereInputSchema } from '../inputTypeSchemas/account_actionsWhereInputSchema';
import { account_actionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/account_actionsOrderByWithRelationInputSchema';
import { account_actionsWhereUniqueInputSchema } from '../inputTypeSchemas/account_actionsWhereUniqueInputSchema';
import { Account_actionsScalarFieldEnumSchema } from '../inputTypeSchemas/Account_actionsScalarFieldEnumSchema';
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

export const account_actionsFindManyArgsSchema: z.ZodType<Prisma.account_actionsFindManyArgs> = z
	.object({
		select: account_actionsSelectSchema.optional(),
		include: account_actionsIncludeSchema.optional(),
		where: account_actionsWhereInputSchema.optional(),
		orderBy: z
			.union([
				account_actionsOrderByWithRelationInputSchema.array(),
				account_actionsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: account_actionsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([Account_actionsScalarFieldEnumSchema, Account_actionsScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();

export default account_actionsFindManyArgsSchema;
