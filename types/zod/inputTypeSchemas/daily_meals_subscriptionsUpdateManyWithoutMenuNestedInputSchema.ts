import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutMenuInputSchema } from './daily_meals_subscriptionsCreateWithoutMenuInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutMenuInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutMenuInputSchema';
import { daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenuInputSchema } from './daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenuInputSchema';
import { daily_meals_subscriptionsCreateManyMenuInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyMenuInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenuInputSchema } from './daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenuInputSchema';
import { daily_meals_subscriptionsUpdateManyWithWhereWithoutMenuInputSchema } from './daily_meals_subscriptionsUpdateManyWithWhereWithoutMenuInputSchema';
import { daily_meals_subscriptionsScalarWhereInputSchema } from './daily_meals_subscriptionsScalarWhereInputSchema';

export const daily_meals_subscriptionsUpdateManyWithoutMenuNestedInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateManyWithoutMenuNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateWithoutMenuInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateWithoutMenuInputSchema).array(),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutMenuInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutMenuInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenuInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenuInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => daily_meals_subscriptionsCreateManyMenuInputEnvelopeSchema).optional(),
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
					z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenuInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenuInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutMenuInputSchema),
					z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutMenuInputSchema).array(),
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

export default daily_meals_subscriptionsUpdateManyWithoutMenuNestedInputSchema;
