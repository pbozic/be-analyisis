import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsCountOutputTypeSelectSchema } from './lost_itemsCountOutputTypeSelectSchema';

export const lost_itemsCountOutputTypeArgsSchema: z.ZodType<Prisma.lost_itemsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => lost_itemsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default lost_itemsCountOutputTypeSelectSchema;
