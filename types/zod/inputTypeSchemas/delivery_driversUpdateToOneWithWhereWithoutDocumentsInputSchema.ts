import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversUpdateWithoutDocumentsInputSchema } from './delivery_driversUpdateWithoutDocumentsInputSchema';
import { delivery_driversUncheckedUpdateWithoutDocumentsInputSchema } from './delivery_driversUncheckedUpdateWithoutDocumentsInputSchema';

export const delivery_driversUpdateToOneWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.delivery_driversUpdateToOneWithWhereWithoutDocumentsInput> =
	z
		.object({
			where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => delivery_driversUpdateWithoutDocumentsInputSchema),
				z.lazy(() => delivery_driversUncheckedUpdateWithoutDocumentsInputSchema),
			]),
		})
		.strict();

export default delivery_driversUpdateToOneWithWhereWithoutDocumentsInputSchema;
