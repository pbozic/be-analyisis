import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsCreateWithoutReferredInputSchema } from './referralsCreateWithoutReferredInputSchema';
import { referralsUncheckedCreateWithoutReferredInputSchema } from './referralsUncheckedCreateWithoutReferredInputSchema';
import { referralsCreateOrConnectWithoutReferredInputSchema } from './referralsCreateOrConnectWithoutReferredInputSchema';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';

export const referralsCreateNestedOneWithoutReferredInputSchema: z.ZodType<Prisma.referralsCreateNestedOneWithoutReferredInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => referralsCreateWithoutReferredInputSchema),
					z.lazy(() => referralsUncheckedCreateWithoutReferredInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => referralsCreateOrConnectWithoutReferredInputSchema).optional(),
			connect: z.lazy(() => referralsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default referralsCreateNestedOneWithoutReferredInputSchema;
