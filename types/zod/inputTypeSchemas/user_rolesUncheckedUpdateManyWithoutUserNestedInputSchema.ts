import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_rolesCreateWithoutUserInputSchema } from './user_rolesCreateWithoutUserInputSchema';
import { user_rolesUncheckedCreateWithoutUserInputSchema } from './user_rolesUncheckedCreateWithoutUserInputSchema';
import { user_rolesCreateOrConnectWithoutUserInputSchema } from './user_rolesCreateOrConnectWithoutUserInputSchema';
import { user_rolesUpsertWithWhereUniqueWithoutUserInputSchema } from './user_rolesUpsertWithWhereUniqueWithoutUserInputSchema';
import { user_rolesCreateManyUserInputEnvelopeSchema } from './user_rolesCreateManyUserInputEnvelopeSchema';
import { user_rolesWhereUniqueInputSchema } from './user_rolesWhereUniqueInputSchema';
import { user_rolesUpdateWithWhereUniqueWithoutUserInputSchema } from './user_rolesUpdateWithWhereUniqueWithoutUserInputSchema';
import { user_rolesUpdateManyWithWhereWithoutUserInputSchema } from './user_rolesUpdateManyWithWhereWithoutUserInputSchema';
import { user_rolesScalarWhereInputSchema } from './user_rolesScalarWhereInputSchema';

export const user_rolesUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.user_rolesUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => user_rolesCreateWithoutUserInputSchema),z.lazy(() => user_rolesCreateWithoutUserInputSchema).array(),z.lazy(() => user_rolesUncheckedCreateWithoutUserInputSchema),z.lazy(() => user_rolesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => user_rolesCreateOrConnectWithoutUserInputSchema),z.lazy(() => user_rolesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => user_rolesUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => user_rolesUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => user_rolesCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => user_rolesWhereUniqueInputSchema),z.lazy(() => user_rolesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => user_rolesWhereUniqueInputSchema),z.lazy(() => user_rolesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => user_rolesWhereUniqueInputSchema),z.lazy(() => user_rolesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => user_rolesWhereUniqueInputSchema),z.lazy(() => user_rolesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => user_rolesUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => user_rolesUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => user_rolesUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => user_rolesUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => user_rolesScalarWhereInputSchema),z.lazy(() => user_rolesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default user_rolesUncheckedUpdateManyWithoutUserNestedInputSchema;
