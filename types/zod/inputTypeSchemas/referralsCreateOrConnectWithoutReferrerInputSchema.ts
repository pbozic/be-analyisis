import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';
import { referralsCreateWithoutReferrerInputSchema } from './referralsCreateWithoutReferrerInputSchema';
import { referralsUncheckedCreateWithoutReferrerInputSchema } from './referralsUncheckedCreateWithoutReferrerInputSchema';

export const referralsCreateOrConnectWithoutReferrerInputSchema: z.ZodType<Prisma.referralsCreateOrConnectWithoutReferrerInput> =
	z
		.object({
			where: z.lazy(() => referralsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => referralsCreateWithoutReferrerInputSchema),
				z.lazy(() => referralsUncheckedCreateWithoutReferrerInputSchema),
			]),
		})
		.strict();

export default referralsCreateOrConnectWithoutReferrerInputSchema;
