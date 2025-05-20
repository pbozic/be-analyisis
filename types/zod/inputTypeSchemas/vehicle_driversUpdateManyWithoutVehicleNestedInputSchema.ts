import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversCreateWithoutVehicleInputSchema } from './vehicle_driversCreateWithoutVehicleInputSchema';
import { vehicle_driversUncheckedCreateWithoutVehicleInputSchema } from './vehicle_driversUncheckedCreateWithoutVehicleInputSchema';
import { vehicle_driversCreateOrConnectWithoutVehicleInputSchema } from './vehicle_driversCreateOrConnectWithoutVehicleInputSchema';
import { vehicle_driversUpsertWithWhereUniqueWithoutVehicleInputSchema } from './vehicle_driversUpsertWithWhereUniqueWithoutVehicleInputSchema';
import { vehicle_driversCreateManyVehicleInputEnvelopeSchema } from './vehicle_driversCreateManyVehicleInputEnvelopeSchema';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';
import { vehicle_driversUpdateWithWhereUniqueWithoutVehicleInputSchema } from './vehicle_driversUpdateWithWhereUniqueWithoutVehicleInputSchema';
import { vehicle_driversUpdateManyWithWhereWithoutVehicleInputSchema } from './vehicle_driversUpdateManyWithWhereWithoutVehicleInputSchema';
import { vehicle_driversScalarWhereInputSchema } from './vehicle_driversScalarWhereInputSchema';

export const vehicle_driversUpdateManyWithoutVehicleNestedInputSchema: z.ZodType<Prisma.vehicle_driversUpdateManyWithoutVehicleNestedInput> = z.object({
  create: z.union([ z.lazy(() => vehicle_driversCreateWithoutVehicleInputSchema),z.lazy(() => vehicle_driversCreateWithoutVehicleInputSchema).array(),z.lazy(() => vehicle_driversUncheckedCreateWithoutVehicleInputSchema),z.lazy(() => vehicle_driversUncheckedCreateWithoutVehicleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => vehicle_driversCreateOrConnectWithoutVehicleInputSchema),z.lazy(() => vehicle_driversCreateOrConnectWithoutVehicleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => vehicle_driversUpsertWithWhereUniqueWithoutVehicleInputSchema),z.lazy(() => vehicle_driversUpsertWithWhereUniqueWithoutVehicleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => vehicle_driversCreateManyVehicleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => vehicle_driversWhereUniqueInputSchema),z.lazy(() => vehicle_driversWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => vehicle_driversWhereUniqueInputSchema),z.lazy(() => vehicle_driversWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => vehicle_driversWhereUniqueInputSchema),z.lazy(() => vehicle_driversWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => vehicle_driversWhereUniqueInputSchema),z.lazy(() => vehicle_driversWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => vehicle_driversUpdateWithWhereUniqueWithoutVehicleInputSchema),z.lazy(() => vehicle_driversUpdateWithWhereUniqueWithoutVehicleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => vehicle_driversUpdateManyWithWhereWithoutVehicleInputSchema),z.lazy(() => vehicle_driversUpdateManyWithWhereWithoutVehicleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => vehicle_driversScalarWhereInputSchema),z.lazy(() => vehicle_driversScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default vehicle_driversUpdateManyWithoutVehicleNestedInputSchema;
