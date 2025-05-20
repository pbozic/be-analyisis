import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutAllowanceInputSchema } from './business_usersCreateWithoutAllowanceInputSchema';
import { business_usersUncheckedCreateWithoutAllowanceInputSchema } from './business_usersUncheckedCreateWithoutAllowanceInputSchema';
import { business_usersCreateOrConnectWithoutAllowanceInputSchema } from './business_usersCreateOrConnectWithoutAllowanceInputSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';

export const business_usersCreateNestedOneWithoutAllowanceInputSchema: z.ZodType<Prisma.business_usersCreateNestedOneWithoutAllowanceInput> = z.object({
  create: z.union([ z.lazy(() => business_usersCreateWithoutAllowanceInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutAllowanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => business_usersCreateOrConnectWithoutAllowanceInputSchema).optional(),
  connect: z.lazy(() => business_usersWhereUniqueInputSchema).optional()
}).strict();

export default business_usersCreateNestedOneWithoutAllowanceInputSchema;
