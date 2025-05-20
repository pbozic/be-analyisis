import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsCreateWithoutBusinessesInputSchema } from './scoring_pointsCreateWithoutBusinessesInputSchema';
import { scoring_pointsUncheckedCreateWithoutBusinessesInputSchema } from './scoring_pointsUncheckedCreateWithoutBusinessesInputSchema';

export const scoring_pointsCreateOrConnectWithoutBusinessesInputSchema: z.ZodType<Prisma.scoring_pointsCreateOrConnectWithoutBusinessesInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutBusinessesInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutBusinessesInputSchema) ]),
}).strict();

export default scoring_pointsCreateOrConnectWithoutBusinessesInputSchema;
