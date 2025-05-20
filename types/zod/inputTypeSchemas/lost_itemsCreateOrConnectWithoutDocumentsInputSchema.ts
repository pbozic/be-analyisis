import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsWhereUniqueInputSchema } from './lost_itemsWhereUniqueInputSchema';
import { lost_itemsCreateWithoutDocumentsInputSchema } from './lost_itemsCreateWithoutDocumentsInputSchema';
import { lost_itemsUncheckedCreateWithoutDocumentsInputSchema } from './lost_itemsUncheckedCreateWithoutDocumentsInputSchema';

export const lost_itemsCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.lost_itemsCreateOrConnectWithoutDocumentsInput> =
	z
		.object({
			where: z.lazy(() => lost_itemsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => lost_itemsCreateWithoutDocumentsInputSchema),
				z.lazy(() => lost_itemsUncheckedCreateWithoutDocumentsInputSchema),
			]),
		})
		.strict();

export default lost_itemsCreateOrConnectWithoutDocumentsInputSchema;
