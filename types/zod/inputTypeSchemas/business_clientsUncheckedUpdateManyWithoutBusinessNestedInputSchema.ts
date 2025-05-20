import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsCreateWithoutBusinessInputSchema } from './business_clientsCreateWithoutBusinessInputSchema';
import { business_clientsUncheckedCreateWithoutBusinessInputSchema } from './business_clientsUncheckedCreateWithoutBusinessInputSchema';
import { business_clientsCreateOrConnectWithoutBusinessInputSchema } from './business_clientsCreateOrConnectWithoutBusinessInputSchema';
import { business_clientsUpsertWithWhereUniqueWithoutBusinessInputSchema } from './business_clientsUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { business_clientsCreateManyBusinessInputEnvelopeSchema } from './business_clientsCreateManyBusinessInputEnvelopeSchema';
import { business_clientsWhereUniqueInputSchema } from './business_clientsWhereUniqueInputSchema';
import { business_clientsUpdateWithWhereUniqueWithoutBusinessInputSchema } from './business_clientsUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { business_clientsUpdateManyWithWhereWithoutBusinessInputSchema } from './business_clientsUpdateManyWithWhereWithoutBusinessInputSchema';
import { business_clientsScalarWhereInputSchema } from './business_clientsScalarWhereInputSchema';

export const business_clientsUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.business_clientsUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => business_clientsCreateWithoutBusinessInputSchema),z.lazy(() => business_clientsCreateWithoutBusinessInputSchema).array(),z.lazy(() => business_clientsUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => business_clientsUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => business_clientsCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => business_clientsCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => business_clientsUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => business_clientsUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => business_clientsCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => business_clientsWhereUniqueInputSchema),z.lazy(() => business_clientsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => business_clientsWhereUniqueInputSchema),z.lazy(() => business_clientsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => business_clientsWhereUniqueInputSchema),z.lazy(() => business_clientsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => business_clientsWhereUniqueInputSchema),z.lazy(() => business_clientsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => business_clientsUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => business_clientsUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => business_clientsUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => business_clientsUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => business_clientsScalarWhereInputSchema),z.lazy(() => business_clientsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default business_clientsUncheckedUpdateManyWithoutBusinessNestedInputSchema;
