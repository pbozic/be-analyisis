import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersUpdateWithoutAllowanceInputSchema } from './business_usersUpdateWithoutAllowanceInputSchema';
import { business_usersUncheckedUpdateWithoutAllowanceInputSchema } from './business_usersUncheckedUpdateWithoutAllowanceInputSchema';
import { business_usersCreateWithoutAllowanceInputSchema } from './business_usersCreateWithoutAllowanceInputSchema';
import { business_usersUncheckedCreateWithoutAllowanceInputSchema } from './business_usersUncheckedCreateWithoutAllowanceInputSchema';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';

export const business_usersUpsertWithoutAllowanceInputSchema: z.ZodType<Prisma.business_usersUpsertWithoutAllowanceInput> = z.object({
  update: z.union([ z.lazy(() => business_usersUpdateWithoutAllowanceInputSchema),z.lazy(() => business_usersUncheckedUpdateWithoutAllowanceInputSchema) ]),
  create: z.union([ z.lazy(() => business_usersCreateWithoutAllowanceInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutAllowanceInputSchema) ]),
  where: z.lazy(() => business_usersWhereInputSchema).optional()
}).strict();

export default business_usersUpsertWithoutAllowanceInputSchema;
