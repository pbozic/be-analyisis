import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsCreateWithoutBusinessInputSchema } from './local_productsCreateWithoutBusinessInputSchema';
import { local_productsUncheckedCreateWithoutBusinessInputSchema } from './local_productsUncheckedCreateWithoutBusinessInputSchema';
import { local_productsCreateOrConnectWithoutBusinessInputSchema } from './local_productsCreateOrConnectWithoutBusinessInputSchema';
import { local_productsWhereUniqueInputSchema } from './local_productsWhereUniqueInputSchema';

export const local_productsUncheckedCreateNestedOneWithoutBusinessInputSchema: z.ZodType<Prisma.local_productsUncheckedCreateNestedOneWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => local_productsCreateWithoutBusinessInputSchema),
					z.lazy(() => local_productsUncheckedCreateWithoutBusinessInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => local_productsCreateOrConnectWithoutBusinessInputSchema).optional(),
			connect: z.lazy(() => local_productsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default local_productsUncheckedCreateNestedOneWithoutBusinessInputSchema;
