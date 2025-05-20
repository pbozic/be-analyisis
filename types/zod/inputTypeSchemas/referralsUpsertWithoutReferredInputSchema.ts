import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsUpdateWithoutReferredInputSchema } from './referralsUpdateWithoutReferredInputSchema';
import { referralsUncheckedUpdateWithoutReferredInputSchema } from './referralsUncheckedUpdateWithoutReferredInputSchema';
import { referralsCreateWithoutReferredInputSchema } from './referralsCreateWithoutReferredInputSchema';
import { referralsUncheckedCreateWithoutReferredInputSchema } from './referralsUncheckedCreateWithoutReferredInputSchema';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';

export const referralsUpsertWithoutReferredInputSchema: z.ZodType<Prisma.referralsUpsertWithoutReferredInput> = z
	.object({
		update: z.union([
			z.lazy(() => referralsUpdateWithoutReferredInputSchema),
			z.lazy(() => referralsUncheckedUpdateWithoutReferredInputSchema),
		]),
		create: z.union([
			z.lazy(() => referralsCreateWithoutReferredInputSchema),
			z.lazy(() => referralsUncheckedCreateWithoutReferredInputSchema),
		]),
		where: z.lazy(() => referralsWhereInputSchema).optional(),
	})
	.strict();

export default referralsUpsertWithoutReferredInputSchema;
