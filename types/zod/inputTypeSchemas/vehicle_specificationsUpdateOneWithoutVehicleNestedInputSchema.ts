import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_specificationsCreateWithoutVehicleInputSchema } from './vehicle_specificationsCreateWithoutVehicleInputSchema';
import { vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema } from './vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema';
import { vehicle_specificationsCreateOrConnectWithoutVehicleInputSchema } from './vehicle_specificationsCreateOrConnectWithoutVehicleInputSchema';
import { vehicle_specificationsUpsertWithoutVehicleInputSchema } from './vehicle_specificationsUpsertWithoutVehicleInputSchema';
import { vehicle_specificationsWhereInputSchema } from './vehicle_specificationsWhereInputSchema';
import { vehicle_specificationsWhereUniqueInputSchema } from './vehicle_specificationsWhereUniqueInputSchema';
import { vehicle_specificationsUpdateToOneWithWhereWithoutVehicleInputSchema } from './vehicle_specificationsUpdateToOneWithWhereWithoutVehicleInputSchema';
import { vehicle_specificationsUpdateWithoutVehicleInputSchema } from './vehicle_specificationsUpdateWithoutVehicleInputSchema';
import { vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema } from './vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema';

export const vehicle_specificationsUpdateOneWithoutVehicleNestedInputSchema: z.ZodType<Prisma.vehicle_specificationsUpdateOneWithoutVehicleNestedInput> = z.object({
  create: z.union([ z.lazy(() => vehicle_specificationsCreateWithoutVehicleInputSchema),z.lazy(() => vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => vehicle_specificationsCreateOrConnectWithoutVehicleInputSchema).optional(),
  upsert: z.lazy(() => vehicle_specificationsUpsertWithoutVehicleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => vehicle_specificationsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => vehicle_specificationsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => vehicle_specificationsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => vehicle_specificationsUpdateToOneWithWhereWithoutVehicleInputSchema),z.lazy(() => vehicle_specificationsUpdateWithoutVehicleInputSchema),z.lazy(() => vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema) ]).optional(),
}).strict();

export default vehicle_specificationsUpdateOneWithoutVehicleNestedInputSchema;
