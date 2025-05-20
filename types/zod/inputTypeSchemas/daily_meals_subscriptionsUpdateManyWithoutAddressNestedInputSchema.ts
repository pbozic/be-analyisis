import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutAddressInputSchema } from './daily_meals_subscriptionsCreateWithoutAddressInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutAddressInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutAddressInputSchema';
import { daily_meals_subscriptionsUpsertWithWhereUniqueWithoutAddressInputSchema } from './daily_meals_subscriptionsUpsertWithWhereUniqueWithoutAddressInputSchema';
import { daily_meals_subscriptionsCreateManyAddressInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyAddressInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithWhereUniqueWithoutAddressInputSchema } from './daily_meals_subscriptionsUpdateWithWhereUniqueWithoutAddressInputSchema';
import { daily_meals_subscriptionsUpdateManyWithWhereWithoutAddressInputSchema } from './daily_meals_subscriptionsUpdateManyWithWhereWithoutAddressInputSchema';
import { daily_meals_subscriptionsScalarWhereInputSchema } from './daily_meals_subscriptionsScalarWhereInputSchema';

export const daily_meals_subscriptionsUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateManyWithoutAddressNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateWithoutAddressInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateWithoutAddressInputSchema).array(),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutAddressInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutAddressInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutAddressInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutAddressInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => daily_meals_subscriptionsCreateManyAddressInputEnvelopeSchema).optional(),
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
					z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutAddressInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutAddressInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutAddressInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutAddressInputSchema).array(),
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

export default daily_meals_subscriptionsUpdateManyWithoutAddressNestedInputSchema;
