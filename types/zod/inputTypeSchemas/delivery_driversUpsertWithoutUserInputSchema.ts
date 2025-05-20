import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversUpdateWithoutUserInputSchema } from './delivery_driversUpdateWithoutUserInputSchema';
import { delivery_driversUncheckedUpdateWithoutUserInputSchema } from './delivery_driversUncheckedUpdateWithoutUserInputSchema';
import { delivery_driversCreateWithoutUserInputSchema } from './delivery_driversCreateWithoutUserInputSchema';
import { delivery_driversUncheckedCreateWithoutUserInputSchema } from './delivery_driversUncheckedCreateWithoutUserInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';

export const delivery_driversUpsertWithoutUserInputSchema: z.ZodType<Prisma.delivery_driversUpsertWithoutUserInput> = z
	.object({
		update: z.union([
			z.lazy(() => delivery_driversUpdateWithoutUserInputSchema),
			z.lazy(() => delivery_driversUncheckedUpdateWithoutUserInputSchema),
		]),
		create: z.union([
			z.lazy(() => delivery_driversCreateWithoutUserInputSchema),
			z.lazy(() => delivery_driversUncheckedCreateWithoutUserInputSchema),
		]),
		where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
	})
	.strict();

export default delivery_driversUpsertWithoutUserInputSchema;
