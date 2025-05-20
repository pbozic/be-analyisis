import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsCreateWithoutPricesInputSchema } from './local_productsCreateWithoutPricesInputSchema';
import { local_productsUncheckedCreateWithoutPricesInputSchema } from './local_productsUncheckedCreateWithoutPricesInputSchema';
import { local_productsCreateOrConnectWithoutPricesInputSchema } from './local_productsCreateOrConnectWithoutPricesInputSchema';
import { local_productsWhereUniqueInputSchema } from './local_productsWhereUniqueInputSchema';

export const local_productsCreateNestedOneWithoutPricesInputSchema: z.ZodType<Prisma.local_productsCreateNestedOneWithoutPricesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => local_productsCreateWithoutPricesInputSchema),
					z.lazy(() => local_productsUncheckedCreateWithoutPricesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => local_productsCreateOrConnectWithoutPricesInputSchema).optional(),
			connect: z.lazy(() => local_productsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default local_productsCreateNestedOneWithoutPricesInputSchema;
