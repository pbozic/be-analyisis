import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutChild_businessesInputSchema } from './businessUpdateWithoutChild_businessesInputSchema';
import { businessUncheckedUpdateWithoutChild_businessesInputSchema } from './businessUncheckedUpdateWithoutChild_businessesInputSchema';
import { businessCreateWithoutChild_businessesInputSchema } from './businessCreateWithoutChild_businessesInputSchema';
import { businessUncheckedCreateWithoutChild_businessesInputSchema } from './businessUncheckedCreateWithoutChild_businessesInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutChild_businessesInputSchema: z.ZodType<Prisma.businessUpsertWithoutChild_businessesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => businessUpdateWithoutChild_businessesInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutChild_businessesInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutChild_businessesInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutChild_businessesInputSchema),
			]),
			where: z.lazy(() => businessWhereInputSchema).optional(),
		})
		.strict();

export default businessUpsertWithoutChild_businessesInputSchema;
