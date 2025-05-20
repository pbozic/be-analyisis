import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutWord_buy_stripe_productInputSchema } from './businessCreateWithoutWord_buy_stripe_productInputSchema';
import { businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema } from './businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema';
import { businessCreateOrConnectWithoutWord_buy_stripe_productInputSchema } from './businessCreateOrConnectWithoutWord_buy_stripe_productInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutWord_buy_stripe_productInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutWord_buy_stripe_productInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutWord_buy_stripe_productInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutWord_buy_stripe_productInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutWord_buy_stripe_productInputSchema;
