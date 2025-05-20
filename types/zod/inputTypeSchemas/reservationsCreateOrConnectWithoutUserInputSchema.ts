import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';
import { reservationsCreateWithoutUserInputSchema } from './reservationsCreateWithoutUserInputSchema';
import { reservationsUncheckedCreateWithoutUserInputSchema } from './reservationsUncheckedCreateWithoutUserInputSchema';

export const reservationsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.reservationsCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => reservationsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => reservationsCreateWithoutUserInputSchema),
				z.lazy(() => reservationsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default reservationsCreateOrConnectWithoutUserInputSchema;
