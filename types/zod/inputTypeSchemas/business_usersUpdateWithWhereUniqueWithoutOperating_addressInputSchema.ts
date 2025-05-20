import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithoutOperating_addressInputSchema } from './business_usersUpdateWithoutOperating_addressInputSchema';
import { business_usersUncheckedUpdateWithoutOperating_addressInputSchema } from './business_usersUncheckedUpdateWithoutOperating_addressInputSchema';

export const business_usersUpdateWithWhereUniqueWithoutOperating_addressInputSchema: z.ZodType<Prisma.business_usersUpdateWithWhereUniqueWithoutOperating_addressInput> = z.object({
  where: z.lazy(() => business_usersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => business_usersUpdateWithoutOperating_addressInputSchema),z.lazy(() => business_usersUncheckedUpdateWithoutOperating_addressInputSchema) ]),
}).strict();

export default business_usersUpdateWithWhereUniqueWithoutOperating_addressInputSchema;
