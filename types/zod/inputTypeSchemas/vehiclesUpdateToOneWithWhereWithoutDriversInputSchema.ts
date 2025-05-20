import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesUpdateWithoutDriversInputSchema } from './vehiclesUpdateWithoutDriversInputSchema';
import { vehiclesUncheckedUpdateWithoutDriversInputSchema } from './vehiclesUncheckedUpdateWithoutDriversInputSchema';

export const vehiclesUpdateToOneWithWhereWithoutDriversInputSchema: z.ZodType<Prisma.vehiclesUpdateToOneWithWhereWithoutDriversInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => vehiclesUpdateWithoutDriversInputSchema),
				z.lazy(() => vehiclesUncheckedUpdateWithoutDriversInputSchema),
			]),
		})
		.strict();

export default vehiclesUpdateToOneWithWhereWithoutDriversInputSchema;
