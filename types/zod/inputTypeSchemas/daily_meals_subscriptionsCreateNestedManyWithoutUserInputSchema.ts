import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutUserInputSchema } from './daily_meals_subscriptionsCreateWithoutUserInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema';
import { daily_meals_subscriptionsCreateManyUserInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyUserInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';

export const daily_meals_subscriptionsCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateWithoutUserInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateWithoutUserInputSchema).array(),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => daily_meals_subscriptionsCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default daily_meals_subscriptionsCreateNestedManyWithoutUserInputSchema;
