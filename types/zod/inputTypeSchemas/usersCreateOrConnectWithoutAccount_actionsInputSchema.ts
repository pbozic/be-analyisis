import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutAccount_actionsInputSchema } from './usersCreateWithoutAccount_actionsInputSchema';
import { usersUncheckedCreateWithoutAccount_actionsInputSchema } from './usersUncheckedCreateWithoutAccount_actionsInputSchema';

export const usersCreateOrConnectWithoutAccount_actionsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutAccount_actionsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutAccount_actionsInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutAccount_actionsInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutAccount_actionsInputSchema;
