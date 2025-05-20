import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithoutBusinessesInputSchema } from './scoring_pointsUpdateWithoutBusinessesInputSchema';
import { scoring_pointsUncheckedUpdateWithoutBusinessesInputSchema } from './scoring_pointsUncheckedUpdateWithoutBusinessesInputSchema';

export const scoring_pointsUpdateWithWhereUniqueWithoutBusinessesInputSchema: z.ZodType<Prisma.scoring_pointsUpdateWithWhereUniqueWithoutBusinessesInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => scoring_pointsUpdateWithoutBusinessesInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateWithoutBusinessesInputSchema) ]),
}).strict();

export default scoring_pointsUpdateWithWhereUniqueWithoutBusinessesInputSchema;
