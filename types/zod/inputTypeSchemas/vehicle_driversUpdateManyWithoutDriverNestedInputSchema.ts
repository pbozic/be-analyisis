import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversCreateWithoutDriverInputSchema } from './vehicle_driversCreateWithoutDriverInputSchema';
import { vehicle_driversUncheckedCreateWithoutDriverInputSchema } from './vehicle_driversUncheckedCreateWithoutDriverInputSchema';
import { vehicle_driversCreateOrConnectWithoutDriverInputSchema } from './vehicle_driversCreateOrConnectWithoutDriverInputSchema';
import { vehicle_driversUpsertWithWhereUniqueWithoutDriverInputSchema } from './vehicle_driversUpsertWithWhereUniqueWithoutDriverInputSchema';
import { vehicle_driversCreateManyDriverInputEnvelopeSchema } from './vehicle_driversCreateManyDriverInputEnvelopeSchema';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';
import { vehicle_driversUpdateWithWhereUniqueWithoutDriverInputSchema } from './vehicle_driversUpdateWithWhereUniqueWithoutDriverInputSchema';
import { vehicle_driversUpdateManyWithWhereWithoutDriverInputSchema } from './vehicle_driversUpdateManyWithWhereWithoutDriverInputSchema';
import { vehicle_driversScalarWhereInputSchema } from './vehicle_driversScalarWhereInputSchema';

export const vehicle_driversUpdateManyWithoutDriverNestedInputSchema: z.ZodType<Prisma.vehicle_driversUpdateManyWithoutDriverNestedInput> = z.object({
  create: z.union([ z.lazy(() => vehicle_driversCreateWithoutDriverInputSchema),z.lazy(() => vehicle_driversCreateWithoutDriverInputSchema).array(),z.lazy(() => vehicle_driversUncheckedCreateWithoutDriverInputSchema),z.lazy(() => vehicle_driversUncheckedCreateWithoutDriverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => vehicle_driversCreateOrConnectWithoutDriverInputSchema),z.lazy(() => vehicle_driversCreateOrConnectWithoutDriverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => vehicle_driversUpsertWithWhereUniqueWithoutDriverInputSchema),z.lazy(() => vehicle_driversUpsertWithWhereUniqueWithoutDriverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => vehicle_driversCreateManyDriverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => vehicle_driversWhereUniqueInputSchema),z.lazy(() => vehicle_driversWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => vehicle_driversWhereUniqueInputSchema),z.lazy(() => vehicle_driversWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => vehicle_driversWhereUniqueInputSchema),z.lazy(() => vehicle_driversWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => vehicle_driversWhereUniqueInputSchema),z.lazy(() => vehicle_driversWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => vehicle_driversUpdateWithWhereUniqueWithoutDriverInputSchema),z.lazy(() => vehicle_driversUpdateWithWhereUniqueWithoutDriverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => vehicle_driversUpdateManyWithWhereWithoutDriverInputSchema),z.lazy(() => vehicle_driversUpdateManyWithWhereWithoutDriverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => vehicle_driversScalarWhereInputSchema),z.lazy(() => vehicle_driversScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default vehicle_driversUpdateManyWithoutDriverNestedInputSchema;
