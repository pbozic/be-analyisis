import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutDelivery_driverInputSchema } from './documentsCreateWithoutDelivery_driverInputSchema';
import { documentsUncheckedCreateWithoutDelivery_driverInputSchema } from './documentsUncheckedCreateWithoutDelivery_driverInputSchema';
import { documentsCreateOrConnectWithoutDelivery_driverInputSchema } from './documentsCreateOrConnectWithoutDelivery_driverInputSchema';
import { documentsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema } from './documentsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema';
import { documentsCreateManyDelivery_driverInputEnvelopeSchema } from './documentsCreateManyDelivery_driverInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema } from './documentsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema';
import { documentsUpdateManyWithWhereWithoutDelivery_driverInputSchema } from './documentsUpdateManyWithWhereWithoutDelivery_driverInputSchema';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';

export const documentsUncheckedUpdateManyWithoutDelivery_driverNestedInputSchema: z.ZodType<Prisma.documentsUncheckedUpdateManyWithoutDelivery_driverNestedInput> = z.object({
  create: z.union([ z.lazy(() => documentsCreateWithoutDelivery_driverInputSchema),z.lazy(() => documentsCreateWithoutDelivery_driverInputSchema).array(),z.lazy(() => documentsUncheckedCreateWithoutDelivery_driverInputSchema),z.lazy(() => documentsUncheckedCreateWithoutDelivery_driverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => documentsCreateOrConnectWithoutDelivery_driverInputSchema),z.lazy(() => documentsCreateOrConnectWithoutDelivery_driverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => documentsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema),z.lazy(() => documentsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => documentsCreateManyDelivery_driverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => documentsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema),z.lazy(() => documentsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => documentsUpdateManyWithWhereWithoutDelivery_driverInputSchema),z.lazy(() => documentsUpdateManyWithWhereWithoutDelivery_driverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => documentsScalarWhereInputSchema),z.lazy(() => documentsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default documentsUncheckedUpdateManyWithoutDelivery_driverNestedInputSchema;
