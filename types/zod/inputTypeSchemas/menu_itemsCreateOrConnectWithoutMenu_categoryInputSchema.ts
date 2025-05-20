import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsWhereUniqueInputSchema } from './menu_itemsWhereUniqueInputSchema';
import { menu_itemsCreateWithoutMenu_categoryInputSchema } from './menu_itemsCreateWithoutMenu_categoryInputSchema';
import { menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema } from './menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema';

export const menu_itemsCreateOrConnectWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_itemsCreateOrConnectWithoutMenu_categoryInput> =
	z
		.object({
			where: z.lazy(() => menu_itemsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => menu_itemsCreateWithoutMenu_categoryInputSchema),
				z.lazy(() => menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema),
			]),
		})
		.strict();

export default menu_itemsCreateOrConnectWithoutMenu_categoryInputSchema;
