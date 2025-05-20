import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsCreateWithoutReferrerInputSchema } from './referralsCreateWithoutReferrerInputSchema';
import { referralsUncheckedCreateWithoutReferrerInputSchema } from './referralsUncheckedCreateWithoutReferrerInputSchema';
import { referralsCreateOrConnectWithoutReferrerInputSchema } from './referralsCreateOrConnectWithoutReferrerInputSchema';
import { referralsUpsertWithWhereUniqueWithoutReferrerInputSchema } from './referralsUpsertWithWhereUniqueWithoutReferrerInputSchema';
import { referralsCreateManyReferrerInputEnvelopeSchema } from './referralsCreateManyReferrerInputEnvelopeSchema';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';
import { referralsUpdateWithWhereUniqueWithoutReferrerInputSchema } from './referralsUpdateWithWhereUniqueWithoutReferrerInputSchema';
import { referralsUpdateManyWithWhereWithoutReferrerInputSchema } from './referralsUpdateManyWithWhereWithoutReferrerInputSchema';
import { referralsScalarWhereInputSchema } from './referralsScalarWhereInputSchema';

export const referralsUpdateManyWithoutReferrerNestedInputSchema: z.ZodType<Prisma.referralsUpdateManyWithoutReferrerNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => referralsCreateWithoutReferrerInputSchema),
					z.lazy(() => referralsCreateWithoutReferrerInputSchema).array(),
					z.lazy(() => referralsUncheckedCreateWithoutReferrerInputSchema),
					z.lazy(() => referralsUncheckedCreateWithoutReferrerInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => referralsCreateOrConnectWithoutReferrerInputSchema),
					z.lazy(() => referralsCreateOrConnectWithoutReferrerInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => referralsUpsertWithWhereUniqueWithoutReferrerInputSchema),
					z.lazy(() => referralsUpsertWithWhereUniqueWithoutReferrerInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => referralsCreateManyReferrerInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => referralsWhereUniqueInputSchema),
					z.lazy(() => referralsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => referralsWhereUniqueInputSchema),
					z.lazy(() => referralsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => referralsWhereUniqueInputSchema),
					z.lazy(() => referralsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => referralsWhereUniqueInputSchema),
					z.lazy(() => referralsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => referralsUpdateWithWhereUniqueWithoutReferrerInputSchema),
					z.lazy(() => referralsUpdateWithWhereUniqueWithoutReferrerInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => referralsUpdateManyWithWhereWithoutReferrerInputSchema),
					z.lazy(() => referralsUpdateManyWithWhereWithoutReferrerInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => referralsScalarWhereInputSchema),
					z.lazy(() => referralsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default referralsUpdateManyWithoutReferrerNestedInputSchema;
