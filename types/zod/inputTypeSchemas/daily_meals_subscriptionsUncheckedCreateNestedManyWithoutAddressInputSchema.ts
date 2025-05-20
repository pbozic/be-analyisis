import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutAddressInputSchema } from './daily_meals_subscriptionsCreateWithoutAddressInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutAddressInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutAddressInputSchema';
import { daily_meals_subscriptionsCreateManyAddressInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyAddressInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';

export const daily_meals_subscriptionsUncheckedCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUncheckedCreateNestedManyWithoutAddressInput> =
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
			createMany: z.lazy(() => daily_meals_subscriptionsCreateManyAddressInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default daily_meals_subscriptionsUncheckedCreateNestedManyWithoutAddressInputSchema;
