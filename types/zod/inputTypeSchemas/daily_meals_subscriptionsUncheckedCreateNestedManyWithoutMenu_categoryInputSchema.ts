import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';

export const daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenu_categoryInput> =
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
			createMany: z.lazy(() => daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
					z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema;
