import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutUsersInputSchema } from './business_usersCreateWithoutUsersInputSchema';
import { business_usersUncheckedCreateWithoutUsersInputSchema } from './business_usersUncheckedCreateWithoutUsersInputSchema';
import { business_usersCreateOrConnectWithoutUsersInputSchema } from './business_usersCreateOrConnectWithoutUsersInputSchema';
import { business_usersCreateManyUsersInputEnvelopeSchema } from './business_usersCreateManyUsersInputEnvelopeSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';

export const business_usersUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.business_usersUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => business_usersCreateWithoutUsersInputSchema),z.lazy(() => business_usersCreateWithoutUsersInputSchema).array(),z.lazy(() => business_usersUncheckedCreateWithoutUsersInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => business_usersCreateOrConnectWithoutUsersInputSchema),z.lazy(() => business_usersCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => business_usersCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default business_usersUncheckedCreateNestedManyWithoutUsersInputSchema;
