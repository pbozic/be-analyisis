import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsCreateWithoutUserInputSchema } from './account_actionsCreateWithoutUserInputSchema';
import { account_actionsUncheckedCreateWithoutUserInputSchema } from './account_actionsUncheckedCreateWithoutUserInputSchema';

export const account_actionsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.account_actionsCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => account_actionsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => account_actionsCreateWithoutUserInputSchema),
				z.lazy(() => account_actionsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default account_actionsCreateOrConnectWithoutUserInputSchema;
