import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';
import { businessCreateNestedOneWithoutAccount_actionsInputSchema } from './businessCreateNestedOneWithoutAccount_actionsInputSchema';
import { usersCreateNestedOneWithoutAccount_actionsInputSchema } from './usersCreateNestedOneWithoutAccount_actionsInputSchema';

export const account_actionsCreateWithoutAction_creatorInputSchema: z.ZodType<Prisma.account_actionsCreateWithoutAction_creatorInput> =
	z
		.object({
			account_action_id: z.string().uuid().optional(),
			created_at: z.coerce.date().optional(),
			reason: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),
			action: z.lazy(() => ACCOUNT_ACTIONSSchema),
			business: z.lazy(() => businessCreateNestedOneWithoutAccount_actionsInputSchema).optional(),
			user: z.lazy(() => usersCreateNestedOneWithoutAccount_actionsInputSchema).optional(),
		})
		.strict();

export default account_actionsCreateWithoutAction_creatorInputSchema;
