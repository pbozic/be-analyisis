import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutOrdersInputSchema } from './driversUpdateWithoutOrdersInputSchema';
import { driversUncheckedUpdateWithoutOrdersInputSchema } from './driversUncheckedUpdateWithoutOrdersInputSchema';

export const driversUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutOrdersInput> =
	z
		.object({
			where: z.lazy(() => driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => driversUpdateWithoutOrdersInputSchema),
				z.lazy(() => driversUncheckedUpdateWithoutOrdersInputSchema),
			]),
		})
		.strict();

export default driversUpdateToOneWithWhereWithoutOrdersInputSchema;
