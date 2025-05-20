import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsWhereInputSchema } from '../inputTypeSchemas/lost_itemsWhereInputSchema';

export const lost_itemsDeleteManyArgsSchema: z.ZodType<Prisma.lost_itemsDeleteManyArgs> = z
	.object({
		where: lost_itemsWhereInputSchema.optional(),
	})
	.strict();

export default lost_itemsDeleteManyArgsSchema;
