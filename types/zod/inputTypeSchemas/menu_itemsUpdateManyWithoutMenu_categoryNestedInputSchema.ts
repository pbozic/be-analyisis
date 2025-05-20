import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsCreateWithoutMenu_categoryInputSchema } from './menu_itemsCreateWithoutMenu_categoryInputSchema';
import { menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema } from './menu_itemsUncheckedCreateWithoutMenu_categoryInputSchema';
import { menu_itemsCreateOrConnectWithoutMenu_categoryInputSchema } from './menu_itemsCreateOrConnectWithoutMenu_categoryInputSchema';
import { menu_itemsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema } from './menu_itemsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema';
import { menu_itemsCreateManyMenu_categoryInputEnvelopeSchema } from './menu_itemsCreateManyMenu_categoryInputEnvelopeSchema';
import { menu_itemsWhereUniqueInputSchema } from './menu_itemsWhereUniqueInputSchema';
import { menu_itemsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema } from './menu_itemsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema';
import { menu_itemsUpdateManyWithWhereWithoutMenu_categoryInputSchema } from './menu_itemsUpdateManyWithWhereWithoutMenu_categoryInputSchema';
import { menu_itemsScalarWhereInputSchema } from './menu_itemsScalarWhereInputSchema';

export const menu_itemsUpdateManyWithoutMenu_categoryNestedInputSchema: z.ZodType<Prisma.menu_itemsUpdateManyWithoutMenu_categoryNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => menu_itemsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_itemsUpsertWithWhereUniqueWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => menu_itemsCreateManyMenu_categoryInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => menu_itemsWhereUniqueInputSchema),
					z.lazy(() => menu_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => menu_itemsWhereUniqueInputSchema),
					z.lazy(() => menu_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => menu_itemsWhereUniqueInputSchema),
					z.lazy(() => menu_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => menu_itemsWhereUniqueInputSchema),
					z.lazy(() => menu_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => menu_itemsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_itemsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => menu_itemsUpdateManyWithWhereWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_itemsUpdateManyWithWhereWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => menu_itemsScalarWhereInputSchema),
					z.lazy(() => menu_itemsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default menu_itemsUpdateManyWithoutMenu_categoryNestedInputSchema;
