import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithoutOperating_addressInputSchema } from './business_usersUpdateWithoutOperating_addressInputSchema';
import { business_usersUncheckedUpdateWithoutOperating_addressInputSchema } from './business_usersUncheckedUpdateWithoutOperating_addressInputSchema';
import { business_usersCreateWithoutOperating_addressInputSchema } from './business_usersCreateWithoutOperating_addressInputSchema';
import { business_usersUncheckedCreateWithoutOperating_addressInputSchema } from './business_usersUncheckedCreateWithoutOperating_addressInputSchema';

export const business_usersUpsertWithWhereUniqueWithoutOperating_addressInputSchema: z.ZodType<Prisma.business_usersUpsertWithWhereUniqueWithoutOperating_addressInput> = z.object({
  where: z.lazy(() => business_usersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => business_usersUpdateWithoutOperating_addressInputSchema),z.lazy(() => business_usersUncheckedUpdateWithoutOperating_addressInputSchema) ]),
  create: z.union([ z.lazy(() => business_usersCreateWithoutOperating_addressInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutOperating_addressInputSchema) ]),
}).strict();

export default business_usersUpsertWithWhereUniqueWithoutOperating_addressInputSchema;
