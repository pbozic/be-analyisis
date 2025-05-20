import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsWhereUniqueInputSchema } from './business_teamsWhereUniqueInputSchema';
import { business_teamsCreateWithoutBusinessInputSchema } from './business_teamsCreateWithoutBusinessInputSchema';
import { business_teamsUncheckedCreateWithoutBusinessInputSchema } from './business_teamsUncheckedCreateWithoutBusinessInputSchema';

export const business_teamsCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.business_teamsCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_teamsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => business_teamsCreateWithoutBusinessInputSchema),
				z.lazy(() => business_teamsUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_teamsCreateOrConnectWithoutBusinessInputSchema;
