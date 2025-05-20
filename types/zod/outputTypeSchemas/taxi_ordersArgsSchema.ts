import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersSelectSchema } from '../inputTypeSchemas/taxi_ordersSelectSchema';
import { taxi_ordersIncludeSchema } from '../inputTypeSchemas/taxi_ordersIncludeSchema';

export const taxi_ordersArgsSchema: z.ZodType<Prisma.taxi_ordersDefaultArgs> = z
	.object({
		select: z.lazy(() => taxi_ordersSelectSchema).optional(),
		include: z.lazy(() => taxi_ordersIncludeSchema).optional(),
	})
	.strict();

export default taxi_ordersArgsSchema;
