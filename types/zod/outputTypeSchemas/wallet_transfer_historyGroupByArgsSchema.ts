import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_transfer_historyWhereInputSchema } from '../inputTypeSchemas/wallet_transfer_historyWhereInputSchema'
import { wallet_transfer_historyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/wallet_transfer_historyOrderByWithAggregationInputSchema'
import { Wallet_transfer_historyScalarFieldEnumSchema } from '../inputTypeSchemas/Wallet_transfer_historyScalarFieldEnumSchema'
import { wallet_transfer_historyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/wallet_transfer_historyScalarWhereWithAggregatesInputSchema'

export const wallet_transfer_historyGroupByArgsSchema: z.ZodType<Prisma.wallet_transfer_historyGroupByArgs> = z.object({
  where: wallet_transfer_historyWhereInputSchema.optional(),
  orderBy: z.union([ wallet_transfer_historyOrderByWithAggregationInputSchema.array(),wallet_transfer_historyOrderByWithAggregationInputSchema ]).optional(),
  by: Wallet_transfer_historyScalarFieldEnumSchema.array(),
  having: wallet_transfer_historyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default wallet_transfer_historyGroupByArgsSchema;
