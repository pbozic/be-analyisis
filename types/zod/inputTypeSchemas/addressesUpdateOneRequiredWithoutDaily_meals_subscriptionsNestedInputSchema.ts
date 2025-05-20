import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutDaily_meals_subscriptionsInputSchema } from './addressesCreateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema } from './addressesCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUpsertWithoutDaily_meals_subscriptionsInputSchema } from './addressesUpsertWithoutDaily_meals_subscriptionsInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema } from './addressesUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUpdateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUpdateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema';

export const addressesUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema: z.ZodType<Prisma.addressesUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInput> =
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
			upsert: z.lazy(() => addressesUpsertWithoutDaily_meals_subscriptionsInputSchema).optional(),
			connect: z.lazy(() => addressesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => addressesUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema),
					z.lazy(() => addressesUpdateWithoutDaily_meals_subscriptionsInputSchema),
					z.lazy(() => addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema),
				])
				.optional(),
		})
		.strict();

export default addressesUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema;
