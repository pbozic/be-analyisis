import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithoutUserInputSchema } from './cashbackUpdateWithoutUserInputSchema';
import { cashbackUncheckedUpdateWithoutUserInputSchema } from './cashbackUncheckedUpdateWithoutUserInputSchema';
import { cashbackCreateWithoutUserInputSchema } from './cashbackCreateWithoutUserInputSchema';
import { cashbackUncheckedCreateWithoutUserInputSchema } from './cashbackUncheckedCreateWithoutUserInputSchema';

export const cashbackUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.cashbackUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => cashbackWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => cashbackUpdateWithoutUserInputSchema),
				z.lazy(() => cashbackUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => cashbackCreateWithoutUserInputSchema),
				z.lazy(() => cashbackUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default cashbackUpsertWithWhereUniqueWithoutUserInputSchema;
