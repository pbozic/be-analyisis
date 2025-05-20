import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutDocumentsInputSchema } from './usersUpdateWithoutDocumentsInputSchema';
import { usersUncheckedUpdateWithoutDocumentsInputSchema } from './usersUncheckedUpdateWithoutDocumentsInputSchema';
import { usersCreateWithoutDocumentsInputSchema } from './usersCreateWithoutDocumentsInputSchema';
import { usersUncheckedCreateWithoutDocumentsInputSchema } from './usersUncheckedCreateWithoutDocumentsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutDocumentsInputSchema: z.ZodType<Prisma.usersUpsertWithoutDocumentsInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutDocumentsInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutDocumentsInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutDocumentsInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutDocumentsInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutDocumentsInputSchema;
