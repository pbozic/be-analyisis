import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsWhereUniqueInputSchema } from './business_teamsWhereUniqueInputSchema';
import { business_teamsUpdateWithoutBusinessInputSchema } from './business_teamsUpdateWithoutBusinessInputSchema';
import { business_teamsUncheckedUpdateWithoutBusinessInputSchema } from './business_teamsUncheckedUpdateWithoutBusinessInputSchema';

export const business_teamsUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.business_teamsUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => business_teamsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => business_teamsUpdateWithoutBusinessInputSchema),z.lazy(() => business_teamsUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default business_teamsUpdateWithWhereUniqueWithoutBusinessInputSchema;
