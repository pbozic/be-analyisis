import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersWhereInputSchema } from '../inputTypeSchemas/delivery_ordersWhereInputSchema';

export const delivery_ordersDeleteManyArgsSchema: z.ZodType<Prisma.delivery_ordersDeleteManyArgs> = z
	.object({
		where: delivery_ordersWhereInputSchema.optional(),
	})
	.strict();

export default delivery_ordersDeleteManyArgsSchema;
