import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';
import { filesCreateWithoutCategoriesInputSchema } from './filesCreateWithoutCategoriesInputSchema';
import { filesUncheckedCreateWithoutCategoriesInputSchema } from './filesUncheckedCreateWithoutCategoriesInputSchema';

export const filesCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.filesCreateOrConnectWithoutCategoriesInput> =
	z
		.object({
			where: z.lazy(() => filesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => filesCreateWithoutCategoriesInputSchema),
				z.lazy(() => filesUncheckedCreateWithoutCategoriesInputSchema),
			]),
		})
		.strict();

export default filesCreateOrConnectWithoutCategoriesInputSchema;
