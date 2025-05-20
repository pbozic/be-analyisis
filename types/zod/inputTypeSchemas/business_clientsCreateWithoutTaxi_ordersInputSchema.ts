import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedOneWithoutBusiness_clientsInputSchema } from './businessCreateNestedOneWithoutBusiness_clientsInputSchema';

export const business_clientsCreateWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_clientsCreateWithoutTaxi_ordersInput> =
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
			business: z.lazy(() => businessCreateNestedOneWithoutBusiness_clientsInputSchema).optional(),
		})
		.strict();

export default business_clientsCreateWithoutTaxi_ordersInputSchema;
