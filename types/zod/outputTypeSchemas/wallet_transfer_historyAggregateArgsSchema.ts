import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_transfer_historyWhereInputSchema } from '../inputTypeSchemas/wallet_transfer_historyWhereInputSchema';
import { wallet_transfer_historyOrderByWithRelationInputSchema } from '../inputTypeSchemas/wallet_transfer_historyOrderByWithRelationInputSchema';
import { wallet_transfer_historyWhereUniqueInputSchema } from '../inputTypeSchemas/wallet_transfer_historyWhereUniqueInputSchema';

export const wallet_transfer_historyAggregateArgsSchema: z.ZodType<Prisma.wallet_transfer_historyAggregateArgs> = z
	.object({
		where: wallet_transfer_historyWhereInputSchema.optional(),
		orderBy: z
			.union([
				wallet_transfer_historyOrderByWithRelationInputSchema.array(),
				wallet_transfer_historyOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: wallet_transfer_historyWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default wallet_transfer_historyAggregateArgsSchema;
