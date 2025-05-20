import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithoutBusinessInputSchema } from './business_usersUpdateWithoutBusinessInputSchema';
import { business_usersUncheckedUpdateWithoutBusinessInputSchema } from './business_usersUncheckedUpdateWithoutBusinessInputSchema';
import { business_usersCreateWithoutBusinessInputSchema } from './business_usersCreateWithoutBusinessInputSchema';
import { business_usersUncheckedCreateWithoutBusinessInputSchema } from './business_usersUncheckedCreateWithoutBusinessInputSchema';

export const business_usersUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.business_usersUpsertWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_usersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => business_usersUpdateWithoutBusinessInputSchema),
				z.lazy(() => business_usersUncheckedUpdateWithoutBusinessInputSchema),
			]),
			create: z.union([
				z.lazy(() => business_usersCreateWithoutBusinessInputSchema),
				z.lazy(() => business_usersUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_usersUpsertWithWhereUniqueWithoutBusinessInputSchema;
