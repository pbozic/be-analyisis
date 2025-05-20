import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressCreateWithoutUsersInputSchema } from './user_addressCreateWithoutUsersInputSchema';
import { user_addressUncheckedCreateWithoutUsersInputSchema } from './user_addressUncheckedCreateWithoutUsersInputSchema';
import { user_addressCreateOrConnectWithoutUsersInputSchema } from './user_addressCreateOrConnectWithoutUsersInputSchema';
import { user_addressCreateManyUsersInputEnvelopeSchema } from './user_addressCreateManyUsersInputEnvelopeSchema';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';

export const user_addressUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.user_addressUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => user_addressCreateWithoutUsersInputSchema),z.lazy(() => user_addressCreateWithoutUsersInputSchema).array(),z.lazy(() => user_addressUncheckedCreateWithoutUsersInputSchema),z.lazy(() => user_addressUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => user_addressCreateOrConnectWithoutUsersInputSchema),z.lazy(() => user_addressCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => user_addressCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => user_addressWhereUniqueInputSchema),z.lazy(() => user_addressWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default user_addressUncheckedCreateNestedManyWithoutUsersInputSchema;
