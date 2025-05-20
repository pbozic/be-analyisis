import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsWhereInputSchema } from '../inputTypeSchemas/account_actionsWhereInputSchema';

export const account_actionsDeleteManyArgsSchema: z.ZodType<Prisma.account_actionsDeleteManyArgs> = z
	.object({
		where: account_actionsWhereInputSchema.optional(),
	})
	.strict();

export default account_actionsDeleteManyArgsSchema;
