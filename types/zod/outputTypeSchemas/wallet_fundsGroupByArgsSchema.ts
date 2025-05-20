import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_fundsWhereInputSchema } from '../inputTypeSchemas/wallet_fundsWhereInputSchema'
import { wallet_fundsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/wallet_fundsOrderByWithAggregationInputSchema'
import { Wallet_fundsScalarFieldEnumSchema } from '../inputTypeSchemas/Wallet_fundsScalarFieldEnumSchema'
import { wallet_fundsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/wallet_fundsScalarWhereWithAggregatesInputSchema'

export const wallet_fundsGroupByArgsSchema: z.ZodType<Prisma.wallet_fundsGroupByArgs> = z.object({
  where: wallet_fundsWhereInputSchema.optional(),
  orderBy: z.union([ wallet_fundsOrderByWithAggregationInputSchema.array(),wallet_fundsOrderByWithAggregationInputSchema ]).optional(),
  by: Wallet_fundsScalarFieldEnumSchema.array(),
  having: wallet_fundsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default wallet_fundsGroupByArgsSchema;
