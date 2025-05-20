import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsWhereUniqueInputSchema } from './business_clientsWhereUniqueInputSchema';
import { business_clientsCreateWithoutBusinessInputSchema } from './business_clientsCreateWithoutBusinessInputSchema';
import { business_clientsUncheckedCreateWithoutBusinessInputSchema } from './business_clientsUncheckedCreateWithoutBusinessInputSchema';

export const business_clientsCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.business_clientsCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_clientsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => business_clientsCreateWithoutBusinessInputSchema),
				z.lazy(() => business_clientsUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_clientsCreateOrConnectWithoutBusinessInputSchema;
