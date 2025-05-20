import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsWhereUniqueInputSchema } from './business_clientsWhereUniqueInputSchema';
import { business_clientsUpdateWithoutBusinessInputSchema } from './business_clientsUpdateWithoutBusinessInputSchema';
import { business_clientsUncheckedUpdateWithoutBusinessInputSchema } from './business_clientsUncheckedUpdateWithoutBusinessInputSchema';

export const business_clientsUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.business_clientsUpdateWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_clientsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => business_clientsUpdateWithoutBusinessInputSchema),
				z.lazy(() => business_clientsUncheckedUpdateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_clientsUpdateWithWhereUniqueWithoutBusinessInputSchema;
