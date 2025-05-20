import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReferralInputSchema } from './usersCreateWithoutReferralInputSchema';
import { usersUncheckedCreateWithoutReferralInputSchema } from './usersUncheckedCreateWithoutReferralInputSchema';
import { usersCreateOrConnectWithoutReferralInputSchema } from './usersCreateOrConnectWithoutReferralInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutReferralInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutReferralInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutReferralInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutReferralInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutReferralInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutReferralInputSchema;
