import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersWhereInputSchema } from '../inputTypeSchemas/taxi_ordersWhereInputSchema';

export const taxi_ordersDeleteManyArgsSchema: z.ZodType<Prisma.taxi_ordersDeleteManyArgs> = z
	.object({
		where: taxi_ordersWhereInputSchema.optional(),
	})
	.strict();

export default taxi_ordersDeleteManyArgsSchema;
