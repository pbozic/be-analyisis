import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutDaily_meals_subscriptionsInputSchema } from './addressesCreateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema } from './addressesCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';

export const addressesCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema: z.ZodType<Prisma.addressesCreateNestedOneWithoutDaily_meals_subscriptionsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => addressesCreateWithoutDaily_meals_subscriptionsInputSchema),
					z.lazy(() => addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => addressesCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema)
				.optional(),
			connect: z.lazy(() => addressesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default addressesCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema;
