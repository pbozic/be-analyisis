import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsScalarWhereInputSchema } from './reservationsScalarWhereInputSchema';
import { reservationsUpdateManyMutationInputSchema } from './reservationsUpdateManyMutationInputSchema';
import { reservationsUncheckedUpdateManyWithoutUserInputSchema } from './reservationsUncheckedUpdateManyWithoutUserInputSchema';

export const reservationsUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.reservationsUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => reservationsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => reservationsUpdateManyMutationInputSchema),
				z.lazy(() => reservationsUncheckedUpdateManyWithoutUserInputSchema),
			]),
		})
		.strict();

export default reservationsUpdateManyWithWhereWithoutUserInputSchema;
