import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutFlag_changesInputSchema } from './usersCreateWithoutFlag_changesInputSchema';
import { usersUncheckedCreateWithoutFlag_changesInputSchema } from './usersUncheckedCreateWithoutFlag_changesInputSchema';

export const usersCreateOrConnectWithoutFlag_changesInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutFlag_changesInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutFlag_changesInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutFlag_changesInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutFlag_changesInputSchema;
