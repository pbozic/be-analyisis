import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutLate_eventsInputSchema } from './usersCreateWithoutLate_eventsInputSchema';
import { usersUncheckedCreateWithoutLate_eventsInputSchema } from './usersUncheckedCreateWithoutLate_eventsInputSchema';
import { usersCreateOrConnectWithoutLate_eventsInputSchema } from './usersCreateOrConnectWithoutLate_eventsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutLate_eventsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutLate_eventsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutLate_eventsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutLate_eventsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutLate_eventsInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutLate_eventsInputSchema;
