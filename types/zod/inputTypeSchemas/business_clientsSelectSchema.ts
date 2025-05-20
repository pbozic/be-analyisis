import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { taxi_ordersFindManyArgsSchema } from '../outputTypeSchemas/taxi_ordersFindManyArgsSchema';
import { Business_clientsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Business_clientsCountOutputTypeArgsSchema';

export const business_clientsSelectSchema: z.ZodType<Prisma.business_clientsSelect> = z
	.object({
		business_clients_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		business_id: z.boolean().optional(),
		first_name: z.boolean().optional(),
		last_name: z.boolean().optional(),
		email: z.boolean().optional(),
		telephone: z.boolean().optional(),
		telephone_code: z.boolean().optional(),
		telephone_number: z.boolean().optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		taxi_orders: z.union([z.boolean(), z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Business_clientsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default business_clientsSelectSchema;
