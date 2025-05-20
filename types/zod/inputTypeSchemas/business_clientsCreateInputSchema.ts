import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedOneWithoutBusiness_clientsInputSchema } from './businessCreateNestedOneWithoutBusiness_clientsInputSchema';
import { taxi_ordersCreateNestedManyWithoutBusiness_clientsInputSchema } from './taxi_ordersCreateNestedManyWithoutBusiness_clientsInputSchema';

export const business_clientsCreateInputSchema: z.ZodType<Prisma.business_clientsCreateInput> = z
	.object({
		business_clients_id: z.string().uuid().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		first_name: z.string().optional().nullable(),
		last_name: z.string().optional().nullable(),
		email: z.string().optional().nullable(),
		telephone: z.string(),
		telephone_code: z.string(),
		telephone_number: z.string(),
		business: z.lazy(() => businessCreateNestedOneWithoutBusiness_clientsInputSchema).optional(),
		taxi_orders: z.lazy(() => taxi_ordersCreateNestedManyWithoutBusiness_clientsInputSchema).optional(),
	})
	.strict();

export default business_clientsCreateInputSchema;
