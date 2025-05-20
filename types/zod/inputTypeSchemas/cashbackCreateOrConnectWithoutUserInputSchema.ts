import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackCreateWithoutUserInputSchema } from './cashbackCreateWithoutUserInputSchema';
import { cashbackUncheckedCreateWithoutUserInputSchema } from './cashbackUncheckedCreateWithoutUserInputSchema';

export const cashbackCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.cashbackCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => cashbackWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => cashbackCreateWithoutUserInputSchema),
				z.lazy(() => cashbackUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default cashbackCreateOrConnectWithoutUserInputSchema;
