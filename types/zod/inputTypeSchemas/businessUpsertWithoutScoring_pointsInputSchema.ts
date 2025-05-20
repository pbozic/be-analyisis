import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutScoring_pointsInputSchema } from './businessUpdateWithoutScoring_pointsInputSchema';
import { businessUncheckedUpdateWithoutScoring_pointsInputSchema } from './businessUncheckedUpdateWithoutScoring_pointsInputSchema';
import { businessCreateWithoutScoring_pointsInputSchema } from './businessCreateWithoutScoring_pointsInputSchema';
import { businessUncheckedCreateWithoutScoring_pointsInputSchema } from './businessUncheckedCreateWithoutScoring_pointsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutScoring_pointsInputSchema: z.ZodType<Prisma.businessUpsertWithoutScoring_pointsInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutScoring_pointsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutScoring_pointsInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutScoring_pointsInputSchema),z.lazy(() => businessUncheckedCreateWithoutScoring_pointsInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutScoring_pointsInputSchema;
