import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutScoring_pointsInputSchema } from './businessCreateWithoutScoring_pointsInputSchema';
import { businessUncheckedCreateWithoutScoring_pointsInputSchema } from './businessUncheckedCreateWithoutScoring_pointsInputSchema';
import { businessCreateOrConnectWithoutScoring_pointsInputSchema } from './businessCreateOrConnectWithoutScoring_pointsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutScoring_pointsInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutScoring_pointsInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutScoring_pointsInputSchema),z.lazy(() => businessUncheckedCreateWithoutScoring_pointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutScoring_pointsInputSchema).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional()
}).strict();

export default businessCreateNestedOneWithoutScoring_pointsInputSchema;
