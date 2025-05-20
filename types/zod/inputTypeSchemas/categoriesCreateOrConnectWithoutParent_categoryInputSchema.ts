import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesCreateWithoutParent_categoryInputSchema } from './categoriesCreateWithoutParent_categoryInputSchema';
import { categoriesUncheckedCreateWithoutParent_categoryInputSchema } from './categoriesUncheckedCreateWithoutParent_categoryInputSchema';

export const categoriesCreateOrConnectWithoutParent_categoryInputSchema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutParent_categoryInput> =
	z
		.object({
			where: z.lazy(() => categoriesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => categoriesCreateWithoutParent_categoryInputSchema),
				z.lazy(() => categoriesUncheckedCreateWithoutParent_categoryInputSchema),
			]),
		})
		.strict();

export default categoriesCreateOrConnectWithoutParent_categoryInputSchema;
