import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutLost_itemsInputSchema } from './usersUpdateWithoutLost_itemsInputSchema';
import { usersUncheckedUpdateWithoutLost_itemsInputSchema } from './usersUncheckedUpdateWithoutLost_itemsInputSchema';
import { usersCreateWithoutLost_itemsInputSchema } from './usersCreateWithoutLost_itemsInputSchema';
import { usersUncheckedCreateWithoutLost_itemsInputSchema } from './usersUncheckedCreateWithoutLost_itemsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutLost_itemsInputSchema: z.ZodType<Prisma.usersUpsertWithoutLost_itemsInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutLost_itemsInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutLost_itemsInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutLost_itemsInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutLost_itemsInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutLost_itemsInputSchema;
