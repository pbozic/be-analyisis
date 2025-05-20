import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutMenuInputSchema } from './daily_meals_subscriptionsCreateWithoutMenuInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutMenuInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutMenuInputSchema';
import { daily_meals_subscriptionsCreateManyMenuInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyMenuInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';

export const daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenuInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenuInput> =
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
			createMany: z.lazy(() => daily_meals_subscriptionsCreateManyMenuInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenuInputSchema;
