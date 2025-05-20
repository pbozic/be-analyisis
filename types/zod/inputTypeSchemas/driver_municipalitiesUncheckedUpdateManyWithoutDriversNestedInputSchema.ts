import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesCreateWithoutDriversInputSchema } from './driver_municipalitiesCreateWithoutDriversInputSchema';
import { driver_municipalitiesUncheckedCreateWithoutDriversInputSchema } from './driver_municipalitiesUncheckedCreateWithoutDriversInputSchema';
import { driver_municipalitiesCreateOrConnectWithoutDriversInputSchema } from './driver_municipalitiesCreateOrConnectWithoutDriversInputSchema';
import { driver_municipalitiesUpsertWithWhereUniqueWithoutDriversInputSchema } from './driver_municipalitiesUpsertWithWhereUniqueWithoutDriversInputSchema';
import { driver_municipalitiesCreateManyDriversInputEnvelopeSchema } from './driver_municipalitiesCreateManyDriversInputEnvelopeSchema';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';
import { driver_municipalitiesUpdateWithWhereUniqueWithoutDriversInputSchema } from './driver_municipalitiesUpdateWithWhereUniqueWithoutDriversInputSchema';
import { driver_municipalitiesUpdateManyWithWhereWithoutDriversInputSchema } from './driver_municipalitiesUpdateManyWithWhereWithoutDriversInputSchema';
import { driver_municipalitiesScalarWhereInputSchema } from './driver_municipalitiesScalarWhereInputSchema';

export const driver_municipalitiesUncheckedUpdateManyWithoutDriversNestedInputSchema: z.ZodType<Prisma.driver_municipalitiesUncheckedUpdateManyWithoutDriversNestedInput> = z.object({
  create: z.union([ z.lazy(() => driver_municipalitiesCreateWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesCreateWithoutDriversInputSchema).array(),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutDriversInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => driver_municipalitiesCreateOrConnectWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesCreateOrConnectWithoutDriversInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => driver_municipalitiesUpsertWithWhereUniqueWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesUpsertWithWhereUniqueWithoutDriversInputSchema).array() ]).optional(),
  createMany: z.lazy(() => driver_municipalitiesCreateManyDriversInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => driver_municipalitiesUpdateWithWhereUniqueWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesUpdateWithWhereUniqueWithoutDriversInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => driver_municipalitiesUpdateManyWithWhereWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesUpdateManyWithWhereWithoutDriversInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => driver_municipalitiesScalarWhereInputSchema),z.lazy(() => driver_municipalitiesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default driver_municipalitiesUncheckedUpdateManyWithoutDriversNestedInputSchema;
