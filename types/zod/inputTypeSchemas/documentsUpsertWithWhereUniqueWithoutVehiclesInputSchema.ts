import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutVehiclesInputSchema } from './documentsUpdateWithoutVehiclesInputSchema';
import { documentsUncheckedUpdateWithoutVehiclesInputSchema } from './documentsUncheckedUpdateWithoutVehiclesInputSchema';
import { documentsCreateWithoutVehiclesInputSchema } from './documentsCreateWithoutVehiclesInputSchema';
import { documentsUncheckedCreateWithoutVehiclesInputSchema } from './documentsUncheckedCreateWithoutVehiclesInputSchema';

export const documentsUpsertWithWhereUniqueWithoutVehiclesInputSchema: z.ZodType<Prisma.documentsUpsertWithWhereUniqueWithoutVehiclesInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => documentsUpdateWithoutVehiclesInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutVehiclesInputSchema) ]),
  create: z.union([ z.lazy(() => documentsCreateWithoutVehiclesInputSchema),z.lazy(() => documentsUncheckedCreateWithoutVehiclesInputSchema) ]),
}).strict();

export default documentsUpsertWithWhereUniqueWithoutVehiclesInputSchema;
