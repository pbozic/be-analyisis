import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversUpdateWithoutUserInputSchema } from './delivery_driversUpdateWithoutUserInputSchema';
import { delivery_driversUncheckedUpdateWithoutUserInputSchema } from './delivery_driversUncheckedUpdateWithoutUserInputSchema';

export const delivery_driversUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.delivery_driversUpdateToOneWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => delivery_driversUpdateWithoutUserInputSchema),
				z.lazy(() => delivery_driversUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict();

export default delivery_driversUpdateToOneWithWhereWithoutUserInputSchema;
