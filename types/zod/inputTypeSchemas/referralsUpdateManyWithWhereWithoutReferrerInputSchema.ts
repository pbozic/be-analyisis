import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsScalarWhereInputSchema } from './referralsScalarWhereInputSchema';
import { referralsUpdateManyMutationInputSchema } from './referralsUpdateManyMutationInputSchema';
import { referralsUncheckedUpdateManyWithoutReferrerInputSchema } from './referralsUncheckedUpdateManyWithoutReferrerInputSchema';

export const referralsUpdateManyWithWhereWithoutReferrerInputSchema: z.ZodType<Prisma.referralsUpdateManyWithWhereWithoutReferrerInput> =
	z
		.object({
			where: z.lazy(() => referralsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => referralsUpdateManyMutationInputSchema),
				z.lazy(() => referralsUncheckedUpdateManyWithoutReferrerInputSchema),
			]),
		})
		.strict();

export default referralsUpdateManyWithWhereWithoutReferrerInputSchema;
