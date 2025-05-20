import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesUpdateManyMutationInputSchema } from '../inputTypeSchemas/menu_categoriesUpdateManyMutationInputSchema';
import { menu_categoriesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/menu_categoriesUncheckedUpdateManyInputSchema';
import { menu_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categoriesWhereInputSchema';

export const menu_categoriesUpdateManyArgsSchema: z.ZodType<Prisma.menu_categoriesUpdateManyArgs> = z
	.object({
		data: z.union([menu_categoriesUpdateManyMutationInputSchema, menu_categoriesUncheckedUpdateManyInputSchema]),
		where: menu_categoriesWhereInputSchema.optional(),
	})
	.strict();

export default menu_categoriesUpdateManyArgsSchema;
