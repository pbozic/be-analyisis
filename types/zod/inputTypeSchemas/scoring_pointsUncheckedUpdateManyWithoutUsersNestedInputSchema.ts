import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutUsersInputSchema } from './scoring_pointsCreateWithoutUsersInputSchema';
import { scoring_pointsUncheckedCreateWithoutUsersInputSchema } from './scoring_pointsUncheckedCreateWithoutUsersInputSchema';
import { scoring_pointsCreateOrConnectWithoutUsersInputSchema } from './scoring_pointsCreateOrConnectWithoutUsersInputSchema';
import { scoring_pointsUpsertWithWhereUniqueWithoutUsersInputSchema } from './scoring_pointsUpsertWithWhereUniqueWithoutUsersInputSchema';
import { scoring_pointsCreateManyUsersInputEnvelopeSchema } from './scoring_pointsCreateManyUsersInputEnvelopeSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithWhereUniqueWithoutUsersInputSchema } from './scoring_pointsUpdateWithWhereUniqueWithoutUsersInputSchema';
import { scoring_pointsUpdateManyWithWhereWithoutUsersInputSchema } from './scoring_pointsUpdateManyWithWhereWithoutUsersInputSchema';
import { scoring_pointsScalarWhereInputSchema } from './scoring_pointsScalarWhereInputSchema';

export const scoring_pointsUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutUsersInputSchema),z.lazy(() => scoring_pointsCreateWithoutUsersInputSchema).array(),z.lazy(() => scoring_pointsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => scoring_pointsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => scoring_pointsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => scoring_pointsUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => scoring_pointsUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => scoring_pointsCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => scoring_pointsWhereUniqueInputSchema),z.lazy(() => scoring_pointsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => scoring_pointsWhereUniqueInputSchema),z.lazy(() => scoring_pointsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => scoring_pointsWhereUniqueInputSchema),z.lazy(() => scoring_pointsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => scoring_pointsWhereUniqueInputSchema),z.lazy(() => scoring_pointsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => scoring_pointsUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => scoring_pointsUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => scoring_pointsUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => scoring_pointsUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => scoring_pointsScalarWhereInputSchema),z.lazy(() => scoring_pointsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default scoring_pointsUncheckedUpdateManyWithoutUsersNestedInputSchema;
