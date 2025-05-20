import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsCreateManyInputSchema } from '../inputTypeSchemas/menu_itemsCreateManyInputSchema';

export const menu_itemsCreateManyArgsSchema: z.ZodType<Prisma.menu_itemsCreateManyArgs> = z
	.object({
		data: z.union([menu_itemsCreateManyInputSchema, menu_itemsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default menu_itemsCreateManyArgsSchema;
