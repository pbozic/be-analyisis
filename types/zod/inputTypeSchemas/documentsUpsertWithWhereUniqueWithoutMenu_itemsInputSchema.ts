import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutMenu_itemsInputSchema } from './documentsUpdateWithoutMenu_itemsInputSchema';
import { documentsUncheckedUpdateWithoutMenu_itemsInputSchema } from './documentsUncheckedUpdateWithoutMenu_itemsInputSchema';
import { documentsCreateWithoutMenu_itemsInputSchema } from './documentsCreateWithoutMenu_itemsInputSchema';
import { documentsUncheckedCreateWithoutMenu_itemsInputSchema } from './documentsUncheckedCreateWithoutMenu_itemsInputSchema';

export const documentsUpsertWithWhereUniqueWithoutMenu_itemsInputSchema: z.ZodType<Prisma.documentsUpsertWithWhereUniqueWithoutMenu_itemsInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => documentsUpdateWithoutMenu_itemsInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutMenu_itemsInputSchema),
			]),
			create: z.union([
				z.lazy(() => documentsCreateWithoutMenu_itemsInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutMenu_itemsInputSchema),
			]),
		})
		.strict();

export default documentsUpsertWithWhereUniqueWithoutMenu_itemsInputSchema;
