import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { group_usersOrderByWithRelationInputSchema } from './group_usersOrderByWithRelationInputSchema';
import { business_usersOrderByWithRelationInputSchema } from './business_usersOrderByWithRelationInputSchema';

export const allowancesOrderByWithRelationInputSchema: z.ZodType<Prisma.allowancesOrderByWithRelationInput> = z
	.object({
		allowance_id: z.lazy(() => SortOrderSchema).optional(),
		group_user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		business_users_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		amount_taxi_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_transfer_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_delivery_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_any_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_taxi_purchase_order: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		amount_transfer_purchase_order: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		amount_delivery_purchase_order: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		amount_any_purchase_order: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		user: z.lazy(() => group_usersOrderByWithRelationInputSchema).optional(),
		business_user: z.lazy(() => business_usersOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default allowancesOrderByWithRelationInputSchema;
