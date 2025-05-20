import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutDocumentsInputSchema } from './businessUpdateWithoutDocumentsInputSchema';
import { businessUncheckedUpdateWithoutDocumentsInputSchema } from './businessUncheckedUpdateWithoutDocumentsInputSchema';

export const businessUpdateToOneWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutDocumentsInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutDocumentsInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutDocumentsInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutDocumentsInputSchema;
