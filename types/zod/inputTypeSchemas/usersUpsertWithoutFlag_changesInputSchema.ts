import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutFlag_changesInputSchema } from './usersUpdateWithoutFlag_changesInputSchema';
import { usersUncheckedUpdateWithoutFlag_changesInputSchema } from './usersUncheckedUpdateWithoutFlag_changesInputSchema';
import { usersCreateWithoutFlag_changesInputSchema } from './usersCreateWithoutFlag_changesInputSchema';
import { usersUncheckedCreateWithoutFlag_changesInputSchema } from './usersUncheckedCreateWithoutFlag_changesInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutFlag_changesInputSchema: z.ZodType<Prisma.usersUpsertWithoutFlag_changesInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutFlag_changesInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutFlag_changesInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutFlag_changesInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutFlag_changesInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutFlag_changesInputSchema;
