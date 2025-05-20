import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersCreateWithoutOperating_addressInputSchema } from './business_usersCreateWithoutOperating_addressInputSchema';
import { business_usersUncheckedCreateWithoutOperating_addressInputSchema } from './business_usersUncheckedCreateWithoutOperating_addressInputSchema';

export const business_usersCreateOrConnectWithoutOperating_addressInputSchema: z.ZodType<Prisma.business_usersCreateOrConnectWithoutOperating_addressInput> = z.object({
  where: z.lazy(() => business_usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => business_usersCreateWithoutOperating_addressInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutOperating_addressInputSchema) ]),
}).strict();

export default business_usersCreateOrConnectWithoutOperating_addressInputSchema;
