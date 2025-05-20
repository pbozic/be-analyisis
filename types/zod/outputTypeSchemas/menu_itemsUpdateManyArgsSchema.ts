import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsUpdateManyMutationInputSchema } from '../inputTypeSchemas/menu_itemsUpdateManyMutationInputSchema';
import { menu_itemsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/menu_itemsUncheckedUpdateManyInputSchema';
import { menu_itemsWhereInputSchema } from '../inputTypeSchemas/menu_itemsWhereInputSchema';

export const menu_itemsUpdateManyArgsSchema: z.ZodType<Prisma.menu_itemsUpdateManyArgs> = z
	.object({
		data: z.union([menu_itemsUpdateManyMutationInputSchema, menu_itemsUncheckedUpdateManyInputSchema]),
		where: menu_itemsWhereInputSchema.optional(),
	})
	.strict();

export default menu_itemsUpdateManyArgsSchema;
