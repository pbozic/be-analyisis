import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsWhereInputSchema } from './lost_itemsWhereInputSchema';
import { lost_itemsUpdateWithoutDocumentsInputSchema } from './lost_itemsUpdateWithoutDocumentsInputSchema';
import { lost_itemsUncheckedUpdateWithoutDocumentsInputSchema } from './lost_itemsUncheckedUpdateWithoutDocumentsInputSchema';

export const lost_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.lost_itemsUpdateToOneWithWhereWithoutDocumentsInput> =
	z
		.object({
			where: z.lazy(() => lost_itemsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => lost_itemsUpdateWithoutDocumentsInputSchema),
				z.lazy(() => lost_itemsUncheckedUpdateWithoutDocumentsInputSchema),
			]),
		})
		.strict();

export default lost_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema;
