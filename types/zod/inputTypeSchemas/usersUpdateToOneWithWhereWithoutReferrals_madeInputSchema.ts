import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutReferrals_madeInputSchema } from './usersUpdateWithoutReferrals_madeInputSchema';
import { usersUncheckedUpdateWithoutReferrals_madeInputSchema } from './usersUncheckedUpdateWithoutReferrals_madeInputSchema';

export const usersUpdateToOneWithWhereWithoutReferrals_madeInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutReferrals_madeInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutReferrals_madeInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutReferrals_madeInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutReferrals_madeInputSchema;
