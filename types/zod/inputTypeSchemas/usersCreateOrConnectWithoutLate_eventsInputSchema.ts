import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutLate_eventsInputSchema } from './usersCreateWithoutLate_eventsInputSchema';
import { usersUncheckedCreateWithoutLate_eventsInputSchema } from './usersUncheckedCreateWithoutLate_eventsInputSchema';

export const usersCreateOrConnectWithoutLate_eventsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutLate_eventsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutLate_eventsInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutLate_eventsInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutLate_eventsInputSchema;
