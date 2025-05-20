import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutMenu_itemsInputSchema } from './documentsUpdateWithoutMenu_itemsInputSchema';
import { documentsUncheckedUpdateWithoutMenu_itemsInputSchema } from './documentsUncheckedUpdateWithoutMenu_itemsInputSchema';

export const documentsUpdateWithWhereUniqueWithoutMenu_itemsInputSchema: z.ZodType<Prisma.documentsUpdateWithWhereUniqueWithoutMenu_itemsInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => documentsUpdateWithoutMenu_itemsInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutMenu_itemsInputSchema),
			]),
		})
		.strict();

export default documentsUpdateWithWhereUniqueWithoutMenu_itemsInputSchema;
