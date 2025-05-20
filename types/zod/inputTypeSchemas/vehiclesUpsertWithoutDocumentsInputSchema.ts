import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesUpdateWithoutDocumentsInputSchema } from './vehiclesUpdateWithoutDocumentsInputSchema';
import { vehiclesUncheckedUpdateWithoutDocumentsInputSchema } from './vehiclesUncheckedUpdateWithoutDocumentsInputSchema';
import { vehiclesCreateWithoutDocumentsInputSchema } from './vehiclesCreateWithoutDocumentsInputSchema';
import { vehiclesUncheckedCreateWithoutDocumentsInputSchema } from './vehiclesUncheckedCreateWithoutDocumentsInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const vehiclesUpsertWithoutDocumentsInputSchema: z.ZodType<Prisma.vehiclesUpsertWithoutDocumentsInput> = z
	.object({
		update: z.union([
			z.lazy(() => vehiclesUpdateWithoutDocumentsInputSchema),
			z.lazy(() => vehiclesUncheckedUpdateWithoutDocumentsInputSchema),
		]),
		create: z.union([
			z.lazy(() => vehiclesCreateWithoutDocumentsInputSchema),
			z.lazy(() => vehiclesUncheckedCreateWithoutDocumentsInputSchema),
		]),
		where: z.lazy(() => vehiclesWhereInputSchema).optional(),
	})
	.strict();

export default vehiclesUpsertWithoutDocumentsInputSchema;
