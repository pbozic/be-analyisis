import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithoutParent_categoryInputSchema } from './categoriesUpdateWithoutParent_categoryInputSchema';
import { categoriesUncheckedUpdateWithoutParent_categoryInputSchema } from './categoriesUncheckedUpdateWithoutParent_categoryInputSchema';

export const categoriesUpdateWithWhereUniqueWithoutParent_categoryInputSchema: z.ZodType<Prisma.categoriesUpdateWithWhereUniqueWithoutParent_categoryInput> =
	z
		.object({
			where: z.lazy(() => categoriesWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => categoriesUpdateWithoutParent_categoryInputSchema),
				z.lazy(() => categoriesUncheckedUpdateWithoutParent_categoryInputSchema),
			]),
		})
		.strict();

export default categoriesUpdateWithWhereUniqueWithoutParent_categoryInputSchema;
