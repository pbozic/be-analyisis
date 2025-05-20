import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesUpdateWithoutPromo_bannersInputSchema } from './filesUpdateWithoutPromo_bannersInputSchema';
import { filesUncheckedUpdateWithoutPromo_bannersInputSchema } from './filesUncheckedUpdateWithoutPromo_bannersInputSchema';
import { filesCreateWithoutPromo_bannersInputSchema } from './filesCreateWithoutPromo_bannersInputSchema';
import { filesUncheckedCreateWithoutPromo_bannersInputSchema } from './filesUncheckedCreateWithoutPromo_bannersInputSchema';
import { filesWhereInputSchema } from './filesWhereInputSchema';

export const filesUpsertWithoutPromo_bannersInputSchema: z.ZodType<Prisma.filesUpsertWithoutPromo_bannersInput> = z
	.object({
		update: z.union([
			z.lazy(() => filesUpdateWithoutPromo_bannersInputSchema),
			z.lazy(() => filesUncheckedUpdateWithoutPromo_bannersInputSchema),
		]),
		create: z.union([
			z.lazy(() => filesCreateWithoutPromo_bannersInputSchema),
			z.lazy(() => filesUncheckedCreateWithoutPromo_bannersInputSchema),
		]),
		where: z.lazy(() => filesWhereInputSchema).optional(),
	})
	.strict();

export default filesUpsertWithoutPromo_bannersInputSchema;
