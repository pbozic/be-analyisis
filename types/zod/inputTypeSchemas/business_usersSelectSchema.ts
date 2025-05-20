import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { addressesArgsSchema } from '../outputTypeSchemas/addressesArgsSchema';
import { allowancesArgsSchema } from '../outputTypeSchemas/allowancesArgsSchema';
import { taxi_ordersFindManyArgsSchema } from '../outputTypeSchemas/taxi_ordersFindManyArgsSchema';
import { Business_usersCountOutputTypeArgsSchema } from '../outputTypeSchemas/Business_usersCountOutputTypeArgsSchema';

export const business_usersSelectSchema: z.ZodType<Prisma.business_usersSelect> = z
	.object({
		business_users_id: z.boolean().optional(),
		online: z.boolean().optional(),
		company_role: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		user_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		operating_address_id: z.boolean().optional(),
		users: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		operating_address: z.union([z.boolean(), z.lazy(() => addressesArgsSchema)]).optional(),
		allowance: z.union([z.boolean(), z.lazy(() => allowancesArgsSchema)]).optional(),
		taxi_orders: z.union([z.boolean(), z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Business_usersCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default business_usersSelectSchema;
