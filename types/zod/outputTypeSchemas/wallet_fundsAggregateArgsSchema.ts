import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_fundsWhereInputSchema } from '../inputTypeSchemas/wallet_fundsWhereInputSchema'
import { wallet_fundsOrderByWithRelationInputSchema } from '../inputTypeSchemas/wallet_fundsOrderByWithRelationInputSchema'
import { wallet_fundsWhereUniqueInputSchema } from '../inputTypeSchemas/wallet_fundsWhereUniqueInputSchema'

export const wallet_fundsAggregateArgsSchema: z.ZodType<Prisma.wallet_fundsAggregateArgs> = z.object({
  where: wallet_fundsWhereInputSchema.optional(),
  orderBy: z.union([ wallet_fundsOrderByWithRelationInputSchema.array(),wallet_fundsOrderByWithRelationInputSchema ]).optional(),
  cursor: wallet_fundsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default wallet_fundsAggregateArgsSchema;
