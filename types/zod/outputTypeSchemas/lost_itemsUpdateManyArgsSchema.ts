import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsUpdateManyMutationInputSchema } from '../inputTypeSchemas/lost_itemsUpdateManyMutationInputSchema';
import { lost_itemsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/lost_itemsUncheckedUpdateManyInputSchema';
import { lost_itemsWhereInputSchema } from '../inputTypeSchemas/lost_itemsWhereInputSchema';

export const lost_itemsUpdateManyArgsSchema: z.ZodType<Prisma.lost_itemsUpdateManyArgs> = z
	.object({
		data: z.union([lost_itemsUpdateManyMutationInputSchema, lost_itemsUncheckedUpdateManyInputSchema]),
		where: lost_itemsWhereInputSchema.optional(),
	})
	.strict();

export default lost_itemsUpdateManyArgsSchema;
