import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsWhereUniqueInputSchema } from './business_teamsWhereUniqueInputSchema';
import { business_teamsUpdateWithoutBusinessInputSchema } from './business_teamsUpdateWithoutBusinessInputSchema';
import { business_teamsUncheckedUpdateWithoutBusinessInputSchema } from './business_teamsUncheckedUpdateWithoutBusinessInputSchema';
import { business_teamsCreateWithoutBusinessInputSchema } from './business_teamsCreateWithoutBusinessInputSchema';
import { business_teamsUncheckedCreateWithoutBusinessInputSchema } from './business_teamsUncheckedCreateWithoutBusinessInputSchema';

export const business_teamsUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.business_teamsUpsertWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_teamsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => business_teamsUpdateWithoutBusinessInputSchema),
				z.lazy(() => business_teamsUncheckedUpdateWithoutBusinessInputSchema),
			]),
			create: z.union([
				z.lazy(() => business_teamsCreateWithoutBusinessInputSchema),
				z.lazy(() => business_teamsUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_teamsUpsertWithWhereUniqueWithoutBusinessInputSchema;
