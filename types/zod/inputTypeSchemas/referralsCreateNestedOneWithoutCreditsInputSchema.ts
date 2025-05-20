import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsCreateWithoutCreditsInputSchema } from './referralsCreateWithoutCreditsInputSchema';
import { referralsUncheckedCreateWithoutCreditsInputSchema } from './referralsUncheckedCreateWithoutCreditsInputSchema';
import { referralsCreateOrConnectWithoutCreditsInputSchema } from './referralsCreateOrConnectWithoutCreditsInputSchema';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';

export const referralsCreateNestedOneWithoutCreditsInputSchema: z.ZodType<Prisma.referralsCreateNestedOneWithoutCreditsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => referralsCreateWithoutCreditsInputSchema),
					z.lazy(() => referralsUncheckedCreateWithoutCreditsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => referralsCreateOrConnectWithoutCreditsInputSchema).optional(),
			connect: z.lazy(() => referralsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default referralsCreateNestedOneWithoutCreditsInputSchema;
