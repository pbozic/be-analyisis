import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsUpdateManyMutationInputSchema } from '../inputTypeSchemas/account_actionsUpdateManyMutationInputSchema';
import { account_actionsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/account_actionsUncheckedUpdateManyInputSchema';
import { account_actionsWhereInputSchema } from '../inputTypeSchemas/account_actionsWhereInputSchema';

export const account_actionsUpdateManyArgsSchema: z.ZodType<Prisma.account_actionsUpdateManyArgs> = z
	.object({
		data: z.union([account_actionsUpdateManyMutationInputSchema, account_actionsUncheckedUpdateManyInputSchema]),
		where: account_actionsWhereInputSchema.optional(),
	})
	.strict();

export default account_actionsUpdateManyArgsSchema;
