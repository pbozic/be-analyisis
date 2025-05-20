import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutReferralInputSchema } from './usersUpdateWithoutReferralInputSchema';
import { usersUncheckedUpdateWithoutReferralInputSchema } from './usersUncheckedUpdateWithoutReferralInputSchema';

export const usersUpdateToOneWithWhereWithoutReferralInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutReferralInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutReferralInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutReferralInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutReferralInputSchema;
