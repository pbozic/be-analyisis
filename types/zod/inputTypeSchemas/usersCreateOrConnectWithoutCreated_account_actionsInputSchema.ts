import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutCreated_account_actionsInputSchema } from './usersCreateWithoutCreated_account_actionsInputSchema';
import { usersUncheckedCreateWithoutCreated_account_actionsInputSchema } from './usersUncheckedCreateWithoutCreated_account_actionsInputSchema';

export const usersCreateOrConnectWithoutCreated_account_actionsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutCreated_account_actionsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutCreated_account_actionsInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutCreated_account_actionsInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutCreated_account_actionsInputSchema;
