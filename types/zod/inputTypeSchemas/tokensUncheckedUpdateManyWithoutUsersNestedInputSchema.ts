import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensCreateWithoutUsersInputSchema } from './tokensCreateWithoutUsersInputSchema';
import { tokensUncheckedCreateWithoutUsersInputSchema } from './tokensUncheckedCreateWithoutUsersInputSchema';
import { tokensCreateOrConnectWithoutUsersInputSchema } from './tokensCreateOrConnectWithoutUsersInputSchema';
import { tokensUpsertWithWhereUniqueWithoutUsersInputSchema } from './tokensUpsertWithWhereUniqueWithoutUsersInputSchema';
import { tokensCreateManyUsersInputEnvelopeSchema } from './tokensCreateManyUsersInputEnvelopeSchema';
import { tokensWhereUniqueInputSchema } from './tokensWhereUniqueInputSchema';
import { tokensUpdateWithWhereUniqueWithoutUsersInputSchema } from './tokensUpdateWithWhereUniqueWithoutUsersInputSchema';
import { tokensUpdateManyWithWhereWithoutUsersInputSchema } from './tokensUpdateManyWithWhereWithoutUsersInputSchema';
import { tokensScalarWhereInputSchema } from './tokensScalarWhereInputSchema';

export const tokensUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.tokensUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => tokensCreateWithoutUsersInputSchema),z.lazy(() => tokensCreateWithoutUsersInputSchema).array(),z.lazy(() => tokensUncheckedCreateWithoutUsersInputSchema),z.lazy(() => tokensUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => tokensCreateOrConnectWithoutUsersInputSchema),z.lazy(() => tokensCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => tokensUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => tokensUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => tokensCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => tokensWhereUniqueInputSchema),z.lazy(() => tokensWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => tokensWhereUniqueInputSchema),z.lazy(() => tokensWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => tokensWhereUniqueInputSchema),z.lazy(() => tokensWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => tokensWhereUniqueInputSchema),z.lazy(() => tokensWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => tokensUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => tokensUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => tokensUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => tokensUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => tokensScalarWhereInputSchema),z.lazy(() => tokensScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default tokensUncheckedUpdateManyWithoutUsersNestedInputSchema;
