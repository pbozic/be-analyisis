import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsWhereUniqueInputSchema } from './menu_itemsWhereUniqueInputSchema';
import { menu_itemsCreateWithoutDocumentsInputSchema } from './menu_itemsCreateWithoutDocumentsInputSchema';
import { menu_itemsUncheckedCreateWithoutDocumentsInputSchema } from './menu_itemsUncheckedCreateWithoutDocumentsInputSchema';

export const menu_itemsCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.menu_itemsCreateOrConnectWithoutDocumentsInput> =
	z
		.object({
			where: z.lazy(() => menu_itemsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => menu_itemsCreateWithoutDocumentsInputSchema),
				z.lazy(() => menu_itemsUncheckedCreateWithoutDocumentsInputSchema),
			]),
		})
		.strict();

export default menu_itemsCreateOrConnectWithoutDocumentsInputSchema;
