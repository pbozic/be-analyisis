import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesCreateWithoutDriversInputSchema } from './driver_municipalitiesCreateWithoutDriversInputSchema';
import { driver_municipalitiesUncheckedCreateWithoutDriversInputSchema } from './driver_municipalitiesUncheckedCreateWithoutDriversInputSchema';
import { driver_municipalitiesCreateOrConnectWithoutDriversInputSchema } from './driver_municipalitiesCreateOrConnectWithoutDriversInputSchema';
import { driver_municipalitiesCreateManyDriversInputEnvelopeSchema } from './driver_municipalitiesCreateManyDriversInputEnvelopeSchema';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';

export const driver_municipalitiesUncheckedCreateNestedManyWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesUncheckedCreateNestedManyWithoutDriversInput> = z.object({
  create: z.union([ z.lazy(() => driver_municipalitiesCreateWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesCreateWithoutDriversInputSchema).array(),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutDriversInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => driver_municipalitiesCreateOrConnectWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesCreateOrConnectWithoutDriversInputSchema).array() ]).optional(),
  createMany: z.lazy(() => driver_municipalitiesCreateManyDriversInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default driver_municipalitiesUncheckedCreateNestedManyWithoutDriversInputSchema;
