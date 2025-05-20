import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutBusiness_teamsInputSchema } from './usersCreateWithoutBusiness_teamsInputSchema';
import { usersUncheckedCreateWithoutBusiness_teamsInputSchema } from './usersUncheckedCreateWithoutBusiness_teamsInputSchema';
import { usersCreateOrConnectWithoutBusiness_teamsInputSchema } from './usersCreateOrConnectWithoutBusiness_teamsInputSchema';
import { usersUpsertWithWhereUniqueWithoutBusiness_teamsInputSchema } from './usersUpsertWithWhereUniqueWithoutBusiness_teamsInputSchema';
import { usersCreateManyBusiness_teamsInputEnvelopeSchema } from './usersCreateManyBusiness_teamsInputEnvelopeSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateWithWhereUniqueWithoutBusiness_teamsInputSchema } from './usersUpdateWithWhereUniqueWithoutBusiness_teamsInputSchema';
import { usersUpdateManyWithWhereWithoutBusiness_teamsInputSchema } from './usersUpdateManyWithWhereWithoutBusiness_teamsInputSchema';
import { usersScalarWhereInputSchema } from './usersScalarWhereInputSchema';

export const usersUpdateManyWithoutBusiness_teamsNestedInputSchema: z.ZodType<Prisma.usersUpdateManyWithoutBusiness_teamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutBusiness_teamsInputSchema),z.lazy(() => usersCreateWithoutBusiness_teamsInputSchema).array(),z.lazy(() => usersUncheckedCreateWithoutBusiness_teamsInputSchema),z.lazy(() => usersUncheckedCreateWithoutBusiness_teamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => usersCreateOrConnectWithoutBusiness_teamsInputSchema),z.lazy(() => usersCreateOrConnectWithoutBusiness_teamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => usersUpsertWithWhereUniqueWithoutBusiness_teamsInputSchema),z.lazy(() => usersUpsertWithWhereUniqueWithoutBusiness_teamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => usersCreateManyBusiness_teamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => usersUpdateWithWhereUniqueWithoutBusiness_teamsInputSchema),z.lazy(() => usersUpdateWithWhereUniqueWithoutBusiness_teamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => usersUpdateManyWithWhereWithoutBusiness_teamsInputSchema),z.lazy(() => usersUpdateManyWithWhereWithoutBusiness_teamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => usersScalarWhereInputSchema),z.lazy(() => usersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default usersUpdateManyWithoutBusiness_teamsNestedInputSchema;
