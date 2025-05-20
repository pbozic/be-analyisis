import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsWhereUniqueInputSchema } from './business_clientsWhereUniqueInputSchema';
import { business_clientsUpdateWithoutBusinessInputSchema } from './business_clientsUpdateWithoutBusinessInputSchema';
import { business_clientsUncheckedUpdateWithoutBusinessInputSchema } from './business_clientsUncheckedUpdateWithoutBusinessInputSchema';
import { business_clientsCreateWithoutBusinessInputSchema } from './business_clientsCreateWithoutBusinessInputSchema';
import { business_clientsUncheckedCreateWithoutBusinessInputSchema } from './business_clientsUncheckedCreateWithoutBusinessInputSchema';

export const business_clientsUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.business_clientsUpsertWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_clientsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => business_clientsUpdateWithoutBusinessInputSchema),
				z.lazy(() => business_clientsUncheckedUpdateWithoutBusinessInputSchema),
			]),
			create: z.union([
				z.lazy(() => business_clientsCreateWithoutBusinessInputSchema),
				z.lazy(() => business_clientsUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_clientsUpsertWithWhereUniqueWithoutBusinessInputSchema;
