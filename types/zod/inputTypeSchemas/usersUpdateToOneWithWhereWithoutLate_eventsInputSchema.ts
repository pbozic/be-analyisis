import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutLate_eventsInputSchema } from './usersUpdateWithoutLate_eventsInputSchema';
import { usersUncheckedUpdateWithoutLate_eventsInputSchema } from './usersUncheckedUpdateWithoutLate_eventsInputSchema';

export const usersUpdateToOneWithWhereWithoutLate_eventsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutLate_eventsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutLate_eventsInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutLate_eventsInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutLate_eventsInputSchema;
