import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutVehiclesInputSchema } from './documentsCreateWithoutVehiclesInputSchema';
import { documentsUncheckedCreateWithoutVehiclesInputSchema } from './documentsUncheckedCreateWithoutVehiclesInputSchema';

export const documentsCreateOrConnectWithoutVehiclesInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutVehiclesInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => documentsCreateWithoutVehiclesInputSchema),z.lazy(() => documentsUncheckedCreateWithoutVehiclesInputSchema) ]),
}).strict();

export default documentsCreateOrConnectWithoutVehiclesInputSchema;
