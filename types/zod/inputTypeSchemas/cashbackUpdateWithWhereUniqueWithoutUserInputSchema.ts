import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithoutUserInputSchema } from './cashbackUpdateWithoutUserInputSchema';
import { cashbackUncheckedUpdateWithoutUserInputSchema } from './cashbackUncheckedUpdateWithoutUserInputSchema';

export const cashbackUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.cashbackUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => cashbackWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => cashbackUpdateWithoutUserInputSchema),
				z.lazy(() => cashbackUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict();

export default cashbackUpdateWithWhereUniqueWithoutUserInputSchema;
