import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsCreateWithoutDocumentsInputSchema } from './lost_itemsCreateWithoutDocumentsInputSchema';
import { lost_itemsUncheckedCreateWithoutDocumentsInputSchema } from './lost_itemsUncheckedCreateWithoutDocumentsInputSchema';
import { lost_itemsCreateOrConnectWithoutDocumentsInputSchema } from './lost_itemsCreateOrConnectWithoutDocumentsInputSchema';
import { lost_itemsUpsertWithoutDocumentsInputSchema } from './lost_itemsUpsertWithoutDocumentsInputSchema';
import { lost_itemsWhereInputSchema } from './lost_itemsWhereInputSchema';
import { lost_itemsWhereUniqueInputSchema } from './lost_itemsWhereUniqueInputSchema';
import { lost_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema } from './lost_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema';
import { lost_itemsUpdateWithoutDocumentsInputSchema } from './lost_itemsUpdateWithoutDocumentsInputSchema';
import { lost_itemsUncheckedUpdateWithoutDocumentsInputSchema } from './lost_itemsUncheckedUpdateWithoutDocumentsInputSchema';

export const lost_itemsUpdateOneWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.lost_itemsUpdateOneWithoutDocumentsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => lost_itemsCreateWithoutDocumentsInputSchema),
					z.lazy(() => lost_itemsUncheckedCreateWithoutDocumentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => lost_itemsCreateOrConnectWithoutDocumentsInputSchema).optional(),
			upsert: z.lazy(() => lost_itemsUpsertWithoutDocumentsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => lost_itemsWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => lost_itemsWhereInputSchema)]).optional(),
			connect: z.lazy(() => lost_itemsWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => lost_itemsUpdateToOneWithWhereWithoutDocumentsInputSchema),
					z.lazy(() => lost_itemsUpdateWithoutDocumentsInputSchema),
					z.lazy(() => lost_itemsUncheckedUpdateWithoutDocumentsInputSchema),
				])
				.optional(),
		})
		.strict();

export default lost_itemsUpdateOneWithoutDocumentsNestedInputSchema;
