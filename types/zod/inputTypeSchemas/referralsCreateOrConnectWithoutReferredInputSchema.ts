import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';
import { referralsCreateWithoutReferredInputSchema } from './referralsCreateWithoutReferredInputSchema';
import { referralsUncheckedCreateWithoutReferredInputSchema } from './referralsUncheckedCreateWithoutReferredInputSchema';

export const referralsCreateOrConnectWithoutReferredInputSchema: z.ZodType<Prisma.referralsCreateOrConnectWithoutReferredInput> =
	z
		.object({
			where: z.lazy(() => referralsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => referralsCreateWithoutReferredInputSchema),
				z.lazy(() => referralsUncheckedCreateWithoutReferredInputSchema),
			]),
		})
		.strict();

export default referralsCreateOrConnectWithoutReferredInputSchema;
