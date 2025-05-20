import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';
import { documentsUpdateManyMutationInputSchema } from './documentsUpdateManyMutationInputSchema';
import { documentsUncheckedUpdateManyWithoutMenu_itemsInputSchema } from './documentsUncheckedUpdateManyWithoutMenu_itemsInputSchema';

export const documentsUpdateManyWithWhereWithoutMenu_itemsInputSchema: z.ZodType<Prisma.documentsUpdateManyWithWhereWithoutMenu_itemsInput> =
	z
		.object({
			where: z.lazy(() => documentsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => documentsUpdateManyMutationInputSchema),
				z.lazy(() => documentsUncheckedUpdateManyWithoutMenu_itemsInputSchema),
			]),
		})
		.strict();

export default documentsUpdateManyWithWhereWithoutMenu_itemsInputSchema;
