import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutReferralInputSchema } from './usersCreateWithoutReferralInputSchema';
import { usersUncheckedCreateWithoutReferralInputSchema } from './usersUncheckedCreateWithoutReferralInputSchema';

export const usersCreateOrConnectWithoutReferralInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutReferralInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutReferralInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutReferralInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutReferralInputSchema;
