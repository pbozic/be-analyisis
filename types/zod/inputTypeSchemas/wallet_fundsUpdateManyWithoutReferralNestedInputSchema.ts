import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsCreateWithoutReferralInputSchema } from './wallet_fundsCreateWithoutReferralInputSchema';
import { wallet_fundsUncheckedCreateWithoutReferralInputSchema } from './wallet_fundsUncheckedCreateWithoutReferralInputSchema';
import { wallet_fundsCreateOrConnectWithoutReferralInputSchema } from './wallet_fundsCreateOrConnectWithoutReferralInputSchema';
import { wallet_fundsUpsertWithWhereUniqueWithoutReferralInputSchema } from './wallet_fundsUpsertWithWhereUniqueWithoutReferralInputSchema';
import { wallet_fundsCreateManyReferralInputEnvelopeSchema } from './wallet_fundsCreateManyReferralInputEnvelopeSchema';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsUpdateWithWhereUniqueWithoutReferralInputSchema } from './wallet_fundsUpdateWithWhereUniqueWithoutReferralInputSchema';
import { wallet_fundsUpdateManyWithWhereWithoutReferralInputSchema } from './wallet_fundsUpdateManyWithWhereWithoutReferralInputSchema';
import { wallet_fundsScalarWhereInputSchema } from './wallet_fundsScalarWhereInputSchema';

export const wallet_fundsUpdateManyWithoutReferralNestedInputSchema: z.ZodType<Prisma.wallet_fundsUpdateManyWithoutReferralNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => wallet_fundsUpsertWithWhereUniqueWithoutReferralInputSchema),
					z.lazy(() => wallet_fundsUpsertWithWhereUniqueWithoutReferralInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => wallet_fundsCreateManyReferralInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => wallet_fundsWhereUniqueInputSchema),
					z.lazy(() => wallet_fundsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => wallet_fundsWhereUniqueInputSchema),
					z.lazy(() => wallet_fundsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => wallet_fundsWhereUniqueInputSchema),
					z.lazy(() => wallet_fundsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => wallet_fundsWhereUniqueInputSchema),
					z.lazy(() => wallet_fundsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => wallet_fundsUpdateWithWhereUniqueWithoutReferralInputSchema),
					z.lazy(() => wallet_fundsUpdateWithWhereUniqueWithoutReferralInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => wallet_fundsUpdateManyWithWhereWithoutReferralInputSchema),
					z.lazy(() => wallet_fundsUpdateManyWithWhereWithoutReferralInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => wallet_fundsScalarWhereInputSchema),
					z.lazy(() => wallet_fundsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default wallet_fundsUpdateManyWithoutReferralNestedInputSchema;
