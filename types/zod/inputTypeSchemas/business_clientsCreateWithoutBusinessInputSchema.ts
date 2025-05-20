import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateNestedManyWithoutBusiness_clientsInputSchema } from './taxi_ordersCreateNestedManyWithoutBusiness_clientsInputSchema';

export const business_clientsCreateWithoutBusinessInputSchema: z.ZodType<Prisma.business_clientsCreateWithoutBusinessInput> =
	z
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
			taxi_orders: z.lazy(() => taxi_ordersCreateNestedManyWithoutBusiness_clientsInputSchema).optional(),
		})
		.strict();

export default business_clientsCreateWithoutBusinessInputSchema;
