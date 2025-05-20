import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsWhereUniqueInputSchema } from './menu_itemsWhereUniqueInputSchema';
import { menu_itemsUpdateWithoutMenu_categoryInputSchema } from './menu_itemsUpdateWithoutMenu_categoryInputSchema';
import { menu_itemsUncheckedUpdateWithoutMenu_categoryInputSchema } from './menu_itemsUncheckedUpdateWithoutMenu_categoryInputSchema';
import { menu_itemsCreateWithoutMenu_categoryInputSchema } from './menu_itemsCreateWithoutMenu_categoryInputSchema';
import { menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema } from './menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema';

export const menu_itemsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_itemsUpsertWithWhereUniqueWithoutMenu_categoryInput> =
	z
		.object({
			where: z.lazy(() => menu_itemsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => menu_itemsUpdateWithoutMenu_categoryInputSchema),
				z.lazy(() => menu_itemsUncheckedUpdateWithoutMenu_categoryInputSchema),
			]),
			create: z.union([
				z.lazy(() => menu_itemsCreateWithoutMenu_categoryInputSchema),
				z.lazy(() => menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema),
			]),
		})
		.strict();

export default menu_itemsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema;
