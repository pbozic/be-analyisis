import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { daily_meals_subscriptionsWhereInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsWhereInputSchema';

export const daily_meals_subscriptionsDeleteManyArgsSchema: z.ZodType<Prisma.daily_meals_subscriptionsDeleteManyArgs> =
	z
		.object({
			where: daily_meals_subscriptionsWhereInputSchema.optional(),
		})
		.strict();

export default daily_meals_subscriptionsDeleteManyArgsSchema;
