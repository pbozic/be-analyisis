import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { daily_meals_subscriptionsSelectSchema } from '../inputTypeSchemas/daily_meals_subscriptionsSelectSchema';
import { daily_meals_subscriptionsIncludeSchema } from '../inputTypeSchemas/daily_meals_subscriptionsIncludeSchema';

export const daily_meals_subscriptionsArgsSchema: z.ZodType<Prisma.daily_meals_subscriptionsDefaultArgs> = z
	.object({
		select: z.lazy(() => daily_meals_subscriptionsSelectSchema).optional(),
		include: z.lazy(() => daily_meals_subscriptionsIncludeSchema).optional(),
	})
	.strict();

export default daily_meals_subscriptionsArgsSchema;
