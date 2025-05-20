import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutOrdersInputSchema } from './usersCreateWithoutOrdersInputSchema';
import { usersUncheckedCreateWithoutOrdersInputSchema } from './usersUncheckedCreateWithoutOrdersInputSchema';

export const usersCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutOrdersInput> = z
	.object({
		where: z.lazy(() => usersWhereUniqueInputSchema),
		create: z.union([
			z.lazy(() => usersCreateWithoutOrdersInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutOrdersInputSchema),
		]),
	})
	.strict();

export default usersCreateOrConnectWithoutOrdersInputSchema;
