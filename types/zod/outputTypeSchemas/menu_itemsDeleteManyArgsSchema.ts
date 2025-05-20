import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsWhereInputSchema } from '../inputTypeSchemas/menu_itemsWhereInputSchema';

export const menu_itemsDeleteManyArgsSchema: z.ZodType<Prisma.menu_itemsDeleteManyArgs> = z
	.object({
		where: menu_itemsWhereInputSchema.optional(),
	})
	.strict();

export default menu_itemsDeleteManyArgsSchema;
