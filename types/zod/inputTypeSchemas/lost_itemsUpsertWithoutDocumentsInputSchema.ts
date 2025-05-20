import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsUpdateWithoutDocumentsInputSchema } from './lost_itemsUpdateWithoutDocumentsInputSchema';
import { lost_itemsUncheckedUpdateWithoutDocumentsInputSchema } from './lost_itemsUncheckedUpdateWithoutDocumentsInputSchema';
import { lost_itemsCreateWithoutDocumentsInputSchema } from './lost_itemsCreateWithoutDocumentsInputSchema';
import { lost_itemsUncheckedCreateWithoutDocumentsInputSchema } from './lost_itemsUncheckedCreateWithoutDocumentsInputSchema';
import { lost_itemsWhereInputSchema } from './lost_itemsWhereInputSchema';

export const lost_itemsUpsertWithoutDocumentsInputSchema: z.ZodType<Prisma.lost_itemsUpsertWithoutDocumentsInput> = z
	.object({
		update: z.union([
			z.lazy(() => lost_itemsUpdateWithoutDocumentsInputSchema),
			z.lazy(() => lost_itemsUncheckedUpdateWithoutDocumentsInputSchema),
		]),
		create: z.union([
			z.lazy(() => lost_itemsCreateWithoutDocumentsInputSchema),
			z.lazy(() => lost_itemsUncheckedCreateWithoutDocumentsInputSchema),
		]),
		where: z.lazy(() => lost_itemsWhereInputSchema).optional(),
	})
	.strict();

export default lost_itemsUpsertWithoutDocumentsInputSchema;
