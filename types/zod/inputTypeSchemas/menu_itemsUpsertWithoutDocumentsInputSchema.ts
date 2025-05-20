import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsUpdateWithoutDocumentsInputSchema } from './menu_itemsUpdateWithoutDocumentsInputSchema';
import { menu_itemsUncheckedUpdateWithoutDocumentsInputSchema } from './menu_itemsUncheckedUpdateWithoutDocumentsInputSchema';
import { menu_itemsCreateWithoutDocumentsInputSchema } from './menu_itemsCreateWithoutDocumentsInputSchema';
import { menu_itemsUncheckedCreateWithoutDocumentsInputSchema } from './menu_itemsUncheckedCreateWithoutDocumentsInputSchema';
import { menu_itemsWhereInputSchema } from './menu_itemsWhereInputSchema';

export const menu_itemsUpsertWithoutDocumentsInputSchema: z.ZodType<Prisma.menu_itemsUpsertWithoutDocumentsInput> = z
	.object({
		update: z.union([
			z.lazy(() => menu_itemsUpdateWithoutDocumentsInputSchema),
			z.lazy(() => menu_itemsUncheckedUpdateWithoutDocumentsInputSchema),
		]),
		create: z.union([
			z.lazy(() => menu_itemsCreateWithoutDocumentsInputSchema),
			z.lazy(() => menu_itemsUncheckedCreateWithoutDocumentsInputSchema),
		]),
		where: z.lazy(() => menu_itemsWhereInputSchema).optional(),
	})
	.strict();

export default menu_itemsUpsertWithoutDocumentsInputSchema;
