import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_order_sentWhereInputSchema } from '../inputTypeSchemas/delivery_order_sentWhereInputSchema';

export const delivery_order_sentDeleteManyArgsSchema: z.ZodType<Prisma.delivery_order_sentDeleteManyArgs> = z
	.object({
		where: delivery_order_sentWhereInputSchema.optional(),
	})
	.strict();

export default delivery_order_sentDeleteManyArgsSchema;
