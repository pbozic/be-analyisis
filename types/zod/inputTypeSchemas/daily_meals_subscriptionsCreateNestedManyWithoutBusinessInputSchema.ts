import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutBusinessInputSchema } from './daily_meals_subscriptionsCreateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema';
import { daily_meals_subscriptionsCreateManyBusinessInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyBusinessInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';

export const daily_meals_subscriptionsCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateNestedManyWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateWithoutBusinessInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => daily_meals_subscriptionsCreateManyBusinessInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default daily_meals_subscriptionsCreateNestedManyWithoutBusinessInputSchema;
