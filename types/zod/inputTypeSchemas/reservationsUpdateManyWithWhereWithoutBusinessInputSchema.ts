import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsScalarWhereInputSchema } from './reservationsScalarWhereInputSchema';
import { reservationsUpdateManyMutationInputSchema } from './reservationsUpdateManyMutationInputSchema';
import { reservationsUncheckedUpdateManyWithoutBusinessInputSchema } from './reservationsUncheckedUpdateManyWithoutBusinessInputSchema';

export const reservationsUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.reservationsUpdateManyWithWhereWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => reservationsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => reservationsUpdateManyMutationInputSchema),
				z.lazy(() => reservationsUncheckedUpdateManyWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default reservationsUpdateManyWithWhereWithoutBusinessInputSchema;
