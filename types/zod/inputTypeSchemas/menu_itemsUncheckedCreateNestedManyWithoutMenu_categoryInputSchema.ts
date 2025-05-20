import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsCreateWithoutMenu_categoryInputSchema } from './menu_itemsCreateWithoutMenu_categoryInputSchema';
import { menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema } from './menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema';
import { menu_itemsCreateOrConnectWithoutMenu_categoryInputSchema } from './menu_itemsCreateOrConnectWithoutMenu_categoryInputSchema';
import { menu_itemsCreateManyMenu_categoryInputEnvelopeSchema } from './menu_itemsCreateManyMenu_categoryInputEnvelopeSchema';
import { menu_itemsWhereUniqueInputSchema } from './menu_itemsWhereUniqueInputSchema';

export const menu_itemsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_itemsUncheckedCreateNestedManyWithoutMenu_categoryInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menu_itemsCreateWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_itemsCreateWithoutMenu_categoryInputSchema).array(),
					z.lazy(() => menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => menu_itemsCreateOrConnectWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_itemsCreateOrConnectWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => menu_itemsCreateManyMenu_categoryInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => menu_itemsWhereUniqueInputSchema),
					z.lazy(() => menu_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default menu_itemsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema;
