import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { filesOrderByRelationAggregateInputSchema } from './filesOrderByRelationAggregateInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';
import { delivery_driversOrderByWithRelationInputSchema } from './delivery_driversOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { vehiclesOrderByWithRelationInputSchema } from './vehiclesOrderByWithRelationInputSchema';
import { menu_itemsOrderByWithRelationInputSchema } from './menu_itemsOrderByWithRelationInputSchema';
import { lost_itemsOrderByWithRelationInputSchema } from './lost_itemsOrderByWithRelationInputSchema';
import { transactionsOrderByWithRelationInputSchema } from './transactionsOrderByWithRelationInputSchema';

export const documentsOrderByWithRelationInputSchema: z.ZodType<Prisma.documentsOrderByWithRelationInput> = z
	.object({
		document_id: z.lazy(() => SortOrderSchema).optional(),
		document_type: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		expiration_date: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		issue_date: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		additional_info: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		public: z.lazy(() => SortOrderSchema).optional(),
		driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		delivery_driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		vehicle_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		menu_item_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		lost_item_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		transaction_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		files: z.lazy(() => filesOrderByRelationAggregateInputSchema).optional(),
		drivers: z.lazy(() => driversOrderByWithRelationInputSchema).optional(),
		delivery_driver: z.lazy(() => delivery_driversOrderByWithRelationInputSchema).optional(),
		business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
		user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		vehicles: z.lazy(() => vehiclesOrderByWithRelationInputSchema).optional(),
		menu_items: z.lazy(() => menu_itemsOrderByWithRelationInputSchema).optional(),
		lost_items: z.lazy(() => lost_itemsOrderByWithRelationInputSchema).optional(),
		transactions: z.lazy(() => transactionsOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default documentsOrderByWithRelationInputSchema;
