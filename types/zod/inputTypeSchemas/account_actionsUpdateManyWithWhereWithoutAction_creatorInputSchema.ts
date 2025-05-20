import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsScalarWhereInputSchema } from './account_actionsScalarWhereInputSchema';
import { account_actionsUpdateManyMutationInputSchema } from './account_actionsUpdateManyMutationInputSchema';
import { account_actionsUncheckedUpdateManyWithoutAction_creatorInputSchema } from './account_actionsUncheckedUpdateManyWithoutAction_creatorInputSchema';

export const account_actionsUpdateManyWithWhereWithoutAction_creatorInputSchema: z.ZodType<Prisma.account_actionsUpdateManyWithWhereWithoutAction_creatorInput> =
	z
		.object({
			where: z.lazy(() => account_actionsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => account_actionsUpdateManyMutationInputSchema),
				z.lazy(() => account_actionsUncheckedUpdateManyWithoutAction_creatorInputSchema),
			]),
		})
		.strict();

export default account_actionsUpdateManyWithWhereWithoutAction_creatorInputSchema;
