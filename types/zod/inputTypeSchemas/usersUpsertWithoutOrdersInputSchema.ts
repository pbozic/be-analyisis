import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutOrdersInputSchema } from './usersUpdateWithoutOrdersInputSchema';
import { usersUncheckedUpdateWithoutOrdersInputSchema } from './usersUncheckedUpdateWithoutOrdersInputSchema';
import { usersCreateWithoutOrdersInputSchema } from './usersCreateWithoutOrdersInputSchema';
import { usersUncheckedCreateWithoutOrdersInputSchema } from './usersUncheckedCreateWithoutOrdersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.usersUpsertWithoutOrdersInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutOrdersInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutOrdersInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutOrdersInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutOrdersInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutOrdersInputSchema;
