import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';
import { referralsUpdateWithoutReferrerInputSchema } from './referralsUpdateWithoutReferrerInputSchema';
import { referralsUncheckedUpdateWithoutReferrerInputSchema } from './referralsUncheckedUpdateWithoutReferrerInputSchema';
import { referralsCreateWithoutReferrerInputSchema } from './referralsCreateWithoutReferrerInputSchema';
import { referralsUncheckedCreateWithoutReferrerInputSchema } from './referralsUncheckedCreateWithoutReferrerInputSchema';

export const referralsUpsertWithWhereUniqueWithoutReferrerInputSchema: z.ZodType<Prisma.referralsUpsertWithWhereUniqueWithoutReferrerInput> =
	z
		.object({
			where: z.lazy(() => referralsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => referralsUpdateWithoutReferrerInputSchema),
				z.lazy(() => referralsUncheckedUpdateWithoutReferrerInputSchema),
			]),
			create: z.union([
				z.lazy(() => referralsCreateWithoutReferrerInputSchema),
				z.lazy(() => referralsUncheckedCreateWithoutReferrerInputSchema),
			]),
		})
		.strict();

export default referralsUpsertWithWhereUniqueWithoutReferrerInputSchema;
