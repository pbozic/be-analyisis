import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsScalarWhereInputSchema } from './business_teamsScalarWhereInputSchema';
import { business_teamsUpdateManyMutationInputSchema } from './business_teamsUpdateManyMutationInputSchema';
import { business_teamsUncheckedUpdateManyWithoutBusinessInputSchema } from './business_teamsUncheckedUpdateManyWithoutBusinessInputSchema';

export const business_teamsUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.business_teamsUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => business_teamsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => business_teamsUpdateManyMutationInputSchema),z.lazy(() => business_teamsUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export default business_teamsUpdateManyWithWhereWithoutBusinessInputSchema;
