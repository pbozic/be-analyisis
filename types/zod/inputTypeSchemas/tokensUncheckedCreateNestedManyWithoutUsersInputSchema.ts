import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensCreateWithoutUsersInputSchema } from './tokensCreateWithoutUsersInputSchema';
import { tokensUncheckedCreateWithoutUsersInputSchema } from './tokensUncheckedCreateWithoutUsersInputSchema';
import { tokensCreateOrConnectWithoutUsersInputSchema } from './tokensCreateOrConnectWithoutUsersInputSchema';
import { tokensCreateManyUsersInputEnvelopeSchema } from './tokensCreateManyUsersInputEnvelopeSchema';
import { tokensWhereUniqueInputSchema } from './tokensWhereUniqueInputSchema';

export const tokensUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.tokensUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => tokensCreateWithoutUsersInputSchema),z.lazy(() => tokensCreateWithoutUsersInputSchema).array(),z.lazy(() => tokensUncheckedCreateWithoutUsersInputSchema),z.lazy(() => tokensUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => tokensCreateOrConnectWithoutUsersInputSchema),z.lazy(() => tokensCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => tokensCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => tokensWhereUniqueInputSchema),z.lazy(() => tokensWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default tokensUncheckedCreateNestedManyWithoutUsersInputSchema;
