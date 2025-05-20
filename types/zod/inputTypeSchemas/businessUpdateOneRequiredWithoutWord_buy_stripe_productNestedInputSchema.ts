import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutWord_buy_stripe_productInputSchema } from './businessCreateWithoutWord_buy_stripe_productInputSchema';
import { businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema } from './businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema';
import { businessCreateOrConnectWithoutWord_buy_stripe_productInputSchema } from './businessCreateOrConnectWithoutWord_buy_stripe_productInputSchema';
import { businessUpsertWithoutWord_buy_stripe_productInputSchema } from './businessUpsertWithoutWord_buy_stripe_productInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutWord_buy_stripe_productInputSchema } from './businessUpdateToOneWithWhereWithoutWord_buy_stripe_productInputSchema';
import { businessUpdateWithoutWord_buy_stripe_productInputSchema } from './businessUpdateWithoutWord_buy_stripe_productInputSchema';
import { businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema } from './businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema';

export const businessUpdateOneRequiredWithoutWord_buy_stripe_productNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutWord_buy_stripe_productNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutWord_buy_stripe_productInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutWord_buy_stripe_productInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutWord_buy_stripe_productInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutWord_buy_stripe_productInputSchema),
					z.lazy(() => businessUpdateWithoutWord_buy_stripe_productInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneRequiredWithoutWord_buy_stripe_productNestedInputSchema;
