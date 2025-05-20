import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsUpdateManyWithWhereWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUpdateManyWithWhereWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsScalarWhereInputSchema } from './daily_meals_subscriptionsScalarWhereInputSchema';

export const daily_meals_subscriptionsUncheckedUpdateManyWithoutMenu_categoryNestedInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUncheckedUpdateManyWithoutMenu_categoryNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema).array(),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutMenu_categoryInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema),
					z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default daily_meals_subscriptionsUncheckedUpdateManyWithoutMenu_categoryNestedInputSchema;
