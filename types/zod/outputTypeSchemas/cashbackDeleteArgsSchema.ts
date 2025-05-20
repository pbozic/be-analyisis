import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { cashbackIncludeSchema } from '../inputTypeSchemas/cashbackIncludeSchema';
import { cashbackWhereUniqueInputSchema } from '../inputTypeSchemas/cashbackWhereUniqueInputSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const cashbackSelectSchema: z.ZodType<Prisma.cashbackSelect> = z
	.object({
		cashback_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		amount: z.boolean().optional(),
		type: z.boolean().optional(),
		source: z.boolean().optional(),
		status: z.boolean().optional(),
		description: z.boolean().optional(),
		earned_at: z.boolean().optional(),
		expires_at: z.boolean().optional(),
		converted_at: z.boolean().optional(),
		taxi_order_id: z.boolean().optional(),
		delivery_order_id: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		taxi_order: z.union([z.boolean(), z.lazy(() => taxi_ordersArgsSchema)]).optional(),
		delivery_order: z.union([z.boolean(), z.lazy(() => delivery_ordersArgsSchema)]).optional(),
	})
	.strict();

export const cashbackDeleteArgsSchema: z.ZodType<Prisma.cashbackDeleteArgs> = z
	.object({
		select: cashbackSelectSchema.optional(),
		include: cashbackIncludeSchema.optional(),
		where: cashbackWhereUniqueInputSchema,
	})
	.strict();

export default cashbackDeleteArgsSchema;
