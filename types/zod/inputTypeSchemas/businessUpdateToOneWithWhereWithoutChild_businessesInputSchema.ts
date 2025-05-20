import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutChild_businessesInputSchema } from './businessUpdateWithoutChild_businessesInputSchema';
import { businessUncheckedUpdateWithoutChild_businessesInputSchema } from './businessUncheckedUpdateWithoutChild_businessesInputSchema';

export const businessUpdateToOneWithWhereWithoutChild_businessesInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutChild_businessesInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutChild_businessesInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutChild_businessesInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutChild_businessesInputSchema;
