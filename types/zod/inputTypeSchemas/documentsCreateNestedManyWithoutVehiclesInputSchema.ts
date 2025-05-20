import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutVehiclesInputSchema } from './documentsCreateWithoutVehiclesInputSchema';
import { documentsUncheckedCreateWithoutVehiclesInputSchema } from './documentsUncheckedCreateWithoutVehiclesInputSchema';
import { documentsCreateOrConnectWithoutVehiclesInputSchema } from './documentsCreateOrConnectWithoutVehiclesInputSchema';
import { documentsCreateManyVehiclesInputEnvelopeSchema } from './documentsCreateManyVehiclesInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsCreateNestedManyWithoutVehiclesInputSchema: z.ZodType<Prisma.documentsCreateNestedManyWithoutVehiclesInput> = z.object({
  create: z.union([ z.lazy(() => documentsCreateWithoutVehiclesInputSchema),z.lazy(() => documentsCreateWithoutVehiclesInputSchema).array(),z.lazy(() => documentsUncheckedCreateWithoutVehiclesInputSchema),z.lazy(() => documentsUncheckedCreateWithoutVehiclesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => documentsCreateOrConnectWithoutVehiclesInputSchema),z.lazy(() => documentsCreateOrConnectWithoutVehiclesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => documentsCreateManyVehiclesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default documentsCreateNestedManyWithoutVehiclesInputSchema;
