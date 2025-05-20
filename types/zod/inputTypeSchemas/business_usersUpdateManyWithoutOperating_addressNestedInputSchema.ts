import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutOperating_addressInputSchema } from './business_usersCreateWithoutOperating_addressInputSchema';
import { business_usersUncheckedCreateWithoutOperating_addressInputSchema } from './business_usersUncheckedCreateWithoutOperating_addressInputSchema';
import { business_usersCreateOrConnectWithoutOperating_addressInputSchema } from './business_usersCreateOrConnectWithoutOperating_addressInputSchema';
import { business_usersUpsertWithWhereUniqueWithoutOperating_addressInputSchema } from './business_usersUpsertWithWhereUniqueWithoutOperating_addressInputSchema';
import { business_usersCreateManyOperating_addressInputEnvelopeSchema } from './business_usersCreateManyOperating_addressInputEnvelopeSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithWhereUniqueWithoutOperating_addressInputSchema } from './business_usersUpdateWithWhereUniqueWithoutOperating_addressInputSchema';
import { business_usersUpdateManyWithWhereWithoutOperating_addressInputSchema } from './business_usersUpdateManyWithWhereWithoutOperating_addressInputSchema';
import { business_usersScalarWhereInputSchema } from './business_usersScalarWhereInputSchema';

export const business_usersUpdateManyWithoutOperating_addressNestedInputSchema: z.ZodType<Prisma.business_usersUpdateManyWithoutOperating_addressNestedInput> = z.object({
  create: z.union([ z.lazy(() => business_usersCreateWithoutOperating_addressInputSchema),z.lazy(() => business_usersCreateWithoutOperating_addressInputSchema).array(),z.lazy(() => business_usersUncheckedCreateWithoutOperating_addressInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutOperating_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => business_usersCreateOrConnectWithoutOperating_addressInputSchema),z.lazy(() => business_usersCreateOrConnectWithoutOperating_addressInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => business_usersUpsertWithWhereUniqueWithoutOperating_addressInputSchema),z.lazy(() => business_usersUpsertWithWhereUniqueWithoutOperating_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => business_usersCreateManyOperating_addressInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => business_usersUpdateWithWhereUniqueWithoutOperating_addressInputSchema),z.lazy(() => business_usersUpdateWithWhereUniqueWithoutOperating_addressInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => business_usersUpdateManyWithWhereWithoutOperating_addressInputSchema),z.lazy(() => business_usersUpdateManyWithWhereWithoutOperating_addressInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => business_usersScalarWhereInputSchema),z.lazy(() => business_usersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default business_usersUpdateManyWithoutOperating_addressNestedInputSchema;
