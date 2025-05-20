import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsCreateManyInputSchema } from '../inputTypeSchemas/menu_itemsCreateManyInputSchema';

export const menu_itemsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.menu_itemsCreateManyAndReturnArgs> = z
	.object({
		data: z.union([menu_itemsCreateManyInputSchema, menu_itemsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default menu_itemsCreateManyAndReturnArgsSchema;
