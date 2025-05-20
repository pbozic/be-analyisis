import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutLost_itemsInputSchema } from './documentsUpdateWithoutLost_itemsInputSchema';
import { documentsUncheckedUpdateWithoutLost_itemsInputSchema } from './documentsUncheckedUpdateWithoutLost_itemsInputSchema';

export const documentsUpdateWithWhereUniqueWithoutLost_itemsInputSchema: z.ZodType<Prisma.documentsUpdateWithWhereUniqueWithoutLost_itemsInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => documentsUpdateWithoutLost_itemsInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutLost_itemsInputSchema),
			]),
		})
		.strict();

export default documentsUpdateWithWhereUniqueWithoutLost_itemsInputSchema;
