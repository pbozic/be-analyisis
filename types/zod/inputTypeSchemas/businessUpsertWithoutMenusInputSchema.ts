import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutMenusInputSchema } from './businessUpdateWithoutMenusInputSchema';
import { businessUncheckedUpdateWithoutMenusInputSchema } from './businessUncheckedUpdateWithoutMenusInputSchema';
import { businessCreateWithoutMenusInputSchema } from './businessCreateWithoutMenusInputSchema';
import { businessUncheckedCreateWithoutMenusInputSchema } from './businessUncheckedCreateWithoutMenusInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutMenusInputSchema: z.ZodType<Prisma.businessUpsertWithoutMenusInput> = z
	.object({
		update: z.union([
			z.lazy(() => businessUpdateWithoutMenusInputSchema),
			z.lazy(() => businessUncheckedUpdateWithoutMenusInputSchema),
		]),
		create: z.union([
			z.lazy(() => businessCreateWithoutMenusInputSchema),
			z.lazy(() => businessUncheckedCreateWithoutMenusInputSchema),
		]),
		where: z.lazy(() => businessWhereInputSchema).optional(),
	})
	.strict();

export default businessUpsertWithoutMenusInputSchema;
