import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { documentsFindManyArgsSchema } from '../outputTypeSchemas/documentsFindManyArgsSchema';
import { wallet_fundsArgsSchema } from '../outputTypeSchemas/wallet_fundsArgsSchema';
import { TransactionsCountOutputTypeArgsSchema } from '../outputTypeSchemas/TransactionsCountOutputTypeArgsSchema';

export const transactionsSelectSchema: z.ZodType<Prisma.transactionsSelect> = z
	.object({
		transaction_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		amount: z.boolean().optional(),
		type: z.boolean().optional(),
		description: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		delivery_order_id: z.boolean().optional(),
		taxi_order_id: z.boolean().optional(),
		wallet_fund_id: z.boolean().optional(),
		taxi_order: z.union([z.boolean(), z.lazy(() => taxi_ordersArgsSchema)]).optional(),
		delivery_order: z.union([z.boolean(), z.lazy(() => delivery_ordersArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		documents: z.union([z.boolean(), z.lazy(() => documentsFindManyArgsSchema)]).optional(),
		wallet_funds: z.union([z.boolean(), z.lazy(() => wallet_fundsArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => TransactionsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default transactionsSelectSchema;
