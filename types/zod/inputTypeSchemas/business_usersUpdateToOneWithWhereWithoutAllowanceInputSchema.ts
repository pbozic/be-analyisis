import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';
import { business_usersUpdateWithoutAllowanceInputSchema } from './business_usersUpdateWithoutAllowanceInputSchema';
import { business_usersUncheckedUpdateWithoutAllowanceInputSchema } from './business_usersUncheckedUpdateWithoutAllowanceInputSchema';

export const business_usersUpdateToOneWithWhereWithoutAllowanceInputSchema: z.ZodType<Prisma.business_usersUpdateToOneWithWhereWithoutAllowanceInput> = z.object({
  where: z.lazy(() => business_usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => business_usersUpdateWithoutAllowanceInputSchema),z.lazy(() => business_usersUncheckedUpdateWithoutAllowanceInputSchema) ]),
}).strict();

export default business_usersUpdateToOneWithWhereWithoutAllowanceInputSchema;
