import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { taxi_ordersCreateNestedOneWithoutTransactionsInputSchema } from './taxi_ordersCreateNestedOneWithoutTransactionsInputSchema';
import { delivery_ordersCreateNestedOneWithoutTransactionsInputSchema } from './delivery_ordersCreateNestedOneWithoutTransactionsInputSchema';
import { usersCreateNestedOneWithoutTransactionsInputSchema } from './usersCreateNestedOneWithoutTransactionsInputSchema';
import { wallet_fundsCreateNestedOneWithoutTransactionsInputSchema } from './wallet_fundsCreateNestedOneWithoutTransactionsInputSchema';

export const transactionsCreateWithoutDocumentsInputSchema: z.ZodType<Prisma.transactionsCreateWithoutDocumentsInput> =
	z
		.object({
			transaction_id: z.string().uuid().optional(),
			amount: z.number(),
			type: z.lazy(() => TRANSACTION_TYPESchema),
			description: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			taxi_order: z.lazy(() => taxi_ordersCreateNestedOneWithoutTransactionsInputSchema).optional(),
			delivery_order: z.lazy(() => delivery_ordersCreateNestedOneWithoutTransactionsInputSchema).optional(),
			user: z.lazy(() => usersCreateNestedOneWithoutTransactionsInputSchema),
			wallet_funds: z.lazy(() => wallet_fundsCreateNestedOneWithoutTransactionsInputSchema).optional(),
		})
		.strict();

export default transactionsCreateWithoutDocumentsInputSchema;
