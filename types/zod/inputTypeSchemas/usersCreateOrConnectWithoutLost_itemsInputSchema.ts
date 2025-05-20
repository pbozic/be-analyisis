import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutLost_itemsInputSchema } from './usersCreateWithoutLost_itemsInputSchema';
import { usersUncheckedCreateWithoutLost_itemsInputSchema } from './usersUncheckedCreateWithoutLost_itemsInputSchema';

export const usersCreateOrConnectWithoutLost_itemsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutLost_itemsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutLost_itemsInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutLost_itemsInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutLost_itemsInputSchema;
