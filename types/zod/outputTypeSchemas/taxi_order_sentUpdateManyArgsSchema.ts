import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_order_sentUpdateManyMutationInputSchema } from '../inputTypeSchemas/taxi_order_sentUpdateManyMutationInputSchema';
import { taxi_order_sentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/taxi_order_sentUncheckedUpdateManyInputSchema';
import { taxi_order_sentWhereInputSchema } from '../inputTypeSchemas/taxi_order_sentWhereInputSchema';

export const taxi_order_sentUpdateManyArgsSchema: z.ZodType<Prisma.taxi_order_sentUpdateManyArgs> = z
	.object({
		data: z.union([taxi_order_sentUpdateManyMutationInputSchema, taxi_order_sentUncheckedUpdateManyInputSchema]),
		where: taxi_order_sentWhereInputSchema.optional(),
	})
	.strict();

export default taxi_order_sentUpdateManyArgsSchema;
