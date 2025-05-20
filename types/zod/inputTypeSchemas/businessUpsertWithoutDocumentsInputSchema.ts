import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutDocumentsInputSchema } from './businessUpdateWithoutDocumentsInputSchema';
import { businessUncheckedUpdateWithoutDocumentsInputSchema } from './businessUncheckedUpdateWithoutDocumentsInputSchema';
import { businessCreateWithoutDocumentsInputSchema } from './businessCreateWithoutDocumentsInputSchema';
import { businessUncheckedCreateWithoutDocumentsInputSchema } from './businessUncheckedCreateWithoutDocumentsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutDocumentsInputSchema: z.ZodType<Prisma.businessUpsertWithoutDocumentsInput> = z
	.object({
		update: z.union([
			z.lazy(() => businessUpdateWithoutDocumentsInputSchema),
			z.lazy(() => businessUncheckedUpdateWithoutDocumentsInputSchema),
		]),
		create: z.union([
			z.lazy(() => businessCreateWithoutDocumentsInputSchema),
			z.lazy(() => businessUncheckedCreateWithoutDocumentsInputSchema),
		]),
		where: z.lazy(() => businessWhereInputSchema).optional(),
	})
	.strict();

export default businessUpsertWithoutDocumentsInputSchema;
