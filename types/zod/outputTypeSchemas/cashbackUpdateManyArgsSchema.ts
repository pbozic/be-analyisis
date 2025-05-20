import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { cashbackUpdateManyMutationInputSchema } from '../inputTypeSchemas/cashbackUpdateManyMutationInputSchema';
import { cashbackUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/cashbackUncheckedUpdateManyInputSchema';
import { cashbackWhereInputSchema } from '../inputTypeSchemas/cashbackWhereInputSchema';

export const cashbackUpdateManyArgsSchema: z.ZodType<Prisma.cashbackUpdateManyArgs> = z
	.object({
		data: z.union([cashbackUpdateManyMutationInputSchema, cashbackUncheckedUpdateManyInputSchema]),
		where: cashbackWhereInputSchema.optional(),
	})
	.strict();

export default cashbackUpdateManyArgsSchema;
