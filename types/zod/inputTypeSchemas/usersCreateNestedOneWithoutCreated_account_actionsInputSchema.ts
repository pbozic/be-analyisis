import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutCreated_account_actionsInputSchema } from './usersCreateWithoutCreated_account_actionsInputSchema';
import { usersUncheckedCreateWithoutCreated_account_actionsInputSchema } from './usersUncheckedCreateWithoutCreated_account_actionsInputSchema';
import { usersCreateOrConnectWithoutCreated_account_actionsInputSchema } from './usersCreateOrConnectWithoutCreated_account_actionsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutCreated_account_actionsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutCreated_account_actionsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutCreated_account_actionsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutCreated_account_actionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCreated_account_actionsInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutCreated_account_actionsInputSchema;
