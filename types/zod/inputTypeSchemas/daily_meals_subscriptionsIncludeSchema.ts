import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesArgsSchema } from '../outputTypeSchemas/menu_categoriesArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { menusArgsSchema } from '../outputTypeSchemas/menusArgsSchema';
import { addressesArgsSchema } from '../outputTypeSchemas/addressesArgsSchema';

export const daily_meals_subscriptionsIncludeSchema: z.ZodType<Prisma.daily_meals_subscriptionsInclude> = z
	.object({
		menu_category: z.union([z.boolean(), z.lazy(() => menu_categoriesArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		menu: z.union([z.boolean(), z.lazy(() => menusArgsSchema)]).optional(),
		address: z.union([z.boolean(), z.lazy(() => addressesArgsSchema)]).optional(),
	})
	.strict();

export default daily_meals_subscriptionsIncludeSchema;
