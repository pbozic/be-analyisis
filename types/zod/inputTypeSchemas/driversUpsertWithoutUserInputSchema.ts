import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutUserInputSchema } from './driversUpdateWithoutUserInputSchema';
import { driversUncheckedUpdateWithoutUserInputSchema } from './driversUncheckedUpdateWithoutUserInputSchema';
import { driversCreateWithoutUserInputSchema } from './driversCreateWithoutUserInputSchema';
import { driversUncheckedCreateWithoutUserInputSchema } from './driversUncheckedCreateWithoutUserInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutUserInputSchema: z.ZodType<Prisma.driversUpsertWithoutUserInput> = z
	.object({
		update: z.union([
			z.lazy(() => driversUpdateWithoutUserInputSchema),
			z.lazy(() => driversUncheckedUpdateWithoutUserInputSchema),
		]),
		create: z.union([
			z.lazy(() => driversCreateWithoutUserInputSchema),
			z.lazy(() => driversUncheckedCreateWithoutUserInputSchema),
		]),
		where: z.lazy(() => driversWhereInputSchema).optional(),
	})
	.strict();

export default driversUpsertWithoutUserInputSchema;
