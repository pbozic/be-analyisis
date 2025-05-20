import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutDriverInputSchema } from './usersCreateWithoutDriverInputSchema';
import { usersUncheckedCreateWithoutDriverInputSchema } from './usersUncheckedCreateWithoutDriverInputSchema';

export const usersCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutDriverInput> = z
	.object({
		where: z.lazy(() => usersWhereUniqueInputSchema),
		create: z.union([
			z.lazy(() => usersCreateWithoutDriverInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutDriverInputSchema),
		]),
	})
	.strict();

export default usersCreateOrConnectWithoutDriverInputSchema;
