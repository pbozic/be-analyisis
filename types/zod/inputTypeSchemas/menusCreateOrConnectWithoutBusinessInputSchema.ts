import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';
import { menusCreateWithoutBusinessInputSchema } from './menusCreateWithoutBusinessInputSchema';
import { menusUncheckedCreateWithoutBusinessInputSchema } from './menusUncheckedCreateWithoutBusinessInputSchema';

export const menusCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.menusCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => menusWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => menusCreateWithoutBusinessInputSchema),
				z.lazy(() => menusUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default menusCreateOrConnectWithoutBusinessInputSchema;
