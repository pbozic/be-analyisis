import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsWhereInputSchema } from './menu_itemsWhereInputSchema';
import { menu_itemsUpdateWithoutDocumentsInputSchema } from './menu_itemsUpdateWithoutDocumentsInputSchema';
import { menu_itemsUncheckedUpdateWithoutDocumentsInputSchema } from './menu_itemsUncheckedUpdateWithoutDocumentsInputSchema';

export const menu_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.menu_itemsUpdateToOneWithWhereWithoutDocumentsInput> =
	z
		.object({
			where: z.lazy(() => menu_itemsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => menu_itemsUpdateWithoutDocumentsInputSchema),
				z.lazy(() => menu_itemsUncheckedUpdateWithoutDocumentsInputSchema),
			]),
		})
		.strict();

export default menu_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema;
