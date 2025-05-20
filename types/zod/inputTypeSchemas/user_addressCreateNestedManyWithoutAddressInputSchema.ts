import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressCreateWithoutAddressInputSchema } from './user_addressCreateWithoutAddressInputSchema';
import { user_addressUncheckedCreateWithoutAddressInputSchema } from './user_addressUncheckedCreateWithoutAddressInputSchema';
import { user_addressCreateOrConnectWithoutAddressInputSchema } from './user_addressCreateOrConnectWithoutAddressInputSchema';
import { user_addressCreateManyAddressInputEnvelopeSchema } from './user_addressCreateManyAddressInputEnvelopeSchema';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';

export const user_addressCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.user_addressCreateNestedManyWithoutAddressInput> = z.object({
  create: z.union([ z.lazy(() => user_addressCreateWithoutAddressInputSchema),z.lazy(() => user_addressCreateWithoutAddressInputSchema).array(),z.lazy(() => user_addressUncheckedCreateWithoutAddressInputSchema),z.lazy(() => user_addressUncheckedCreateWithoutAddressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => user_addressCreateOrConnectWithoutAddressInputSchema),z.lazy(() => user_addressCreateOrConnectWithoutAddressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => user_addressCreateManyAddressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => user_addressWhereUniqueInputSchema),z.lazy(() => user_addressWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default user_addressCreateNestedManyWithoutAddressInputSchema;
