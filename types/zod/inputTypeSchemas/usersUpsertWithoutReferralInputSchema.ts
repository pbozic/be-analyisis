import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutReferralInputSchema } from './usersUpdateWithoutReferralInputSchema';
import { usersUncheckedUpdateWithoutReferralInputSchema } from './usersUncheckedUpdateWithoutReferralInputSchema';
import { usersCreateWithoutReferralInputSchema } from './usersCreateWithoutReferralInputSchema';
import { usersUncheckedCreateWithoutReferralInputSchema } from './usersUncheckedCreateWithoutReferralInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutReferralInputSchema: z.ZodType<Prisma.usersUpsertWithoutReferralInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutReferralInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutReferralInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutReferralInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutReferralInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutReferralInputSchema;
