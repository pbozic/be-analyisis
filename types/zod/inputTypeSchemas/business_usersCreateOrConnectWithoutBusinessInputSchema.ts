import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersCreateWithoutBusinessInputSchema } from './business_usersCreateWithoutBusinessInputSchema';
import { business_usersUncheckedCreateWithoutBusinessInputSchema } from './business_usersUncheckedCreateWithoutBusinessInputSchema';

export const business_usersCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.business_usersCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => business_usersCreateWithoutBusinessInputSchema),
				z.lazy(() => business_usersUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_usersCreateOrConnectWithoutBusinessInputSchema;
