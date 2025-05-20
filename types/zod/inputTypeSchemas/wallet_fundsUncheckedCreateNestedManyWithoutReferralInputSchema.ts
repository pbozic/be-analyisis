import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsCreateWithoutReferralInputSchema } from './wallet_fundsCreateWithoutReferralInputSchema';
import { wallet_fundsUncheckedCreateWithoutReferralInputSchema } from './wallet_fundsUncheckedCreateWithoutReferralInputSchema';
import { wallet_fundsCreateOrConnectWithoutReferralInputSchema } from './wallet_fundsCreateOrConnectWithoutReferralInputSchema';
import { wallet_fundsCreateManyReferralInputEnvelopeSchema } from './wallet_fundsCreateManyReferralInputEnvelopeSchema';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';

export const wallet_fundsUncheckedCreateNestedManyWithoutReferralInputSchema: z.ZodType<Prisma.wallet_fundsUncheckedCreateNestedManyWithoutReferralInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => wallet_fundsCreateWithoutReferralInputSchema),
					z.lazy(() => wallet_fundsCreateWithoutReferralInputSchema).array(),
					z.lazy(() => wallet_fundsUncheckedCreateWithoutReferralInputSchema),
					z.lazy(() => wallet_fundsUncheckedCreateWithoutReferralInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => wallet_fundsCreateOrConnectWithoutReferralInputSchema),
					z.lazy(() => wallet_fundsCreateOrConnectWithoutReferralInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => wallet_fundsCreateManyReferralInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => wallet_fundsWhereUniqueInputSchema),
					z.lazy(() => wallet_fundsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default wallet_fundsUncheckedCreateNestedManyWithoutReferralInputSchema;
