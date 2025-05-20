import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUncheckedCreateNestedManyWithoutBusiness_clientsInputSchema } from './taxi_ordersUncheckedCreateNestedManyWithoutBusiness_clientsInputSchema';

export const business_clientsUncheckedCreateInputSchema: z.ZodType<Prisma.business_clientsUncheckedCreateInput> = z
	.object({
		business_clients_id: z.string().uuid().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		business_id: z.string(),
		first_name: z.string().optional().nullable(),
		last_name: z.string().optional().nullable(),
		email: z.string().optional().nullable(),
		telephone: z.string(),
		telephone_code: z.string(),
		telephone_number: z.string(),
		taxi_orders: z.lazy(() => taxi_ordersUncheckedCreateNestedManyWithoutBusiness_clientsInputSchema).optional(),
	})
	.strict();

export default business_clientsUncheckedCreateInputSchema;
