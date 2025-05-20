import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_order_sentUpdateManyMutationInputSchema } from '../inputTypeSchemas/delivery_order_sentUpdateManyMutationInputSchema';
import { delivery_order_sentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/delivery_order_sentUncheckedUpdateManyInputSchema';
import { delivery_order_sentWhereInputSchema } from '../inputTypeSchemas/delivery_order_sentWhereInputSchema';

export const delivery_order_sentUpdateManyArgsSchema: z.ZodType<Prisma.delivery_order_sentUpdateManyArgs> = z
	.object({
		data: z.union([
			delivery_order_sentUpdateManyMutationInputSchema,
			delivery_order_sentUncheckedUpdateManyInputSchema,
		]),
		where: delivery_order_sentWhereInputSchema.optional(),
	})
	.strict();

export default delivery_order_sentUpdateManyArgsSchema;
