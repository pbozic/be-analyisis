import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutParent_businessInputSchema } from './businessUpdateWithoutParent_businessInputSchema';
import { businessUncheckedUpdateWithoutParent_businessInputSchema } from './businessUncheckedUpdateWithoutParent_businessInputSchema';
import { businessCreateWithoutParent_businessInputSchema } from './businessCreateWithoutParent_businessInputSchema';
import { businessUncheckedCreateWithoutParent_businessInputSchema } from './businessUncheckedCreateWithoutParent_businessInputSchema';

export const businessUpsertWithWhereUniqueWithoutParent_businessInputSchema: z.ZodType<Prisma.businessUpsertWithWhereUniqueWithoutParent_businessInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => businessUpdateWithoutParent_businessInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutParent_businessInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutParent_businessInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutParent_businessInputSchema),
			]),
		})
		.strict();

export default businessUpsertWithWhereUniqueWithoutParent_businessInputSchema;
