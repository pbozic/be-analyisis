import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutReferrals_madeInputSchema } from './usersCreateWithoutReferrals_madeInputSchema';
import { usersUncheckedCreateWithoutReferrals_madeInputSchema } from './usersUncheckedCreateWithoutReferrals_madeInputSchema';

export const usersCreateOrConnectWithoutReferrals_madeInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutReferrals_madeInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutReferrals_madeInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutReferrals_madeInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutReferrals_madeInputSchema;
