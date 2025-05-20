import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutScoring_pointsInputSchema } from './businessCreateWithoutScoring_pointsInputSchema';
import { businessUncheckedCreateWithoutScoring_pointsInputSchema } from './businessUncheckedCreateWithoutScoring_pointsInputSchema';
import { businessCreateOrConnectWithoutScoring_pointsInputSchema } from './businessCreateOrConnectWithoutScoring_pointsInputSchema';
import { businessUpsertWithoutScoring_pointsInputSchema } from './businessUpsertWithoutScoring_pointsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutScoring_pointsInputSchema } from './businessUpdateToOneWithWhereWithoutScoring_pointsInputSchema';
import { businessUpdateWithoutScoring_pointsInputSchema } from './businessUpdateWithoutScoring_pointsInputSchema';
import { businessUncheckedUpdateWithoutScoring_pointsInputSchema } from './businessUncheckedUpdateWithoutScoring_pointsInputSchema';

export const businessUpdateOneWithoutScoring_pointsNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutScoring_pointsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutScoring_pointsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutScoring_pointsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutScoring_pointsInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutScoring_pointsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutScoring_pointsInputSchema),
					z.lazy(() => businessUpdateWithoutScoring_pointsInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutScoring_pointsInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneWithoutScoring_pointsNestedInputSchema;
