import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithoutBusinessInputSchema } from './business_usersUpdateWithoutBusinessInputSchema';
import { business_usersUncheckedUpdateWithoutBusinessInputSchema } from './business_usersUncheckedUpdateWithoutBusinessInputSchema';

export const business_usersUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.business_usersUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => business_usersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => business_usersUpdateWithoutBusinessInputSchema),z.lazy(() => business_usersUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default business_usersUpdateWithWhereUniqueWithoutBusinessInputSchema;
