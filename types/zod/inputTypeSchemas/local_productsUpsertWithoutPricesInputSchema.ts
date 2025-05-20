import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsUpdateWithoutPricesInputSchema } from './local_productsUpdateWithoutPricesInputSchema';
import { local_productsUncheckedUpdateWithoutPricesInputSchema } from './local_productsUncheckedUpdateWithoutPricesInputSchema';
import { local_productsCreateWithoutPricesInputSchema } from './local_productsCreateWithoutPricesInputSchema';
import { local_productsUncheckedCreateWithoutPricesInputSchema } from './local_productsUncheckedCreateWithoutPricesInputSchema';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';

export const local_productsUpsertWithoutPricesInputSchema: z.ZodType<Prisma.local_productsUpsertWithoutPricesInput> = z
	.object({
		update: z.union([
			z.lazy(() => local_productsUpdateWithoutPricesInputSchema),
			z.lazy(() => local_productsUncheckedUpdateWithoutPricesInputSchema),
		]),
		create: z.union([
			z.lazy(() => local_productsCreateWithoutPricesInputSchema),
			z.lazy(() => local_productsUncheckedCreateWithoutPricesInputSchema),
		]),
		where: z.lazy(() => local_productsWhereInputSchema).optional(),
	})
	.strict();

export default local_productsUpsertWithoutPricesInputSchema;
