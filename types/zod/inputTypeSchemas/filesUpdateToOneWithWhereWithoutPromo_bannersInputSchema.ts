import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereInputSchema } from './filesWhereInputSchema';
import { filesUpdateWithoutPromo_bannersInputSchema } from './filesUpdateWithoutPromo_bannersInputSchema';
import { filesUncheckedUpdateWithoutPromo_bannersInputSchema } from './filesUncheckedUpdateWithoutPromo_bannersInputSchema';

export const filesUpdateToOneWithWhereWithoutPromo_bannersInputSchema: z.ZodType<Prisma.filesUpdateToOneWithWhereWithoutPromo_bannersInput> =
	z
		.object({
			where: z.lazy(() => filesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => filesUpdateWithoutPromo_bannersInputSchema),
				z.lazy(() => filesUncheckedUpdateWithoutPromo_bannersInputSchema),
			]),
		})
		.strict();

export default filesUpdateToOneWithWhereWithoutPromo_bannersInputSchema;
