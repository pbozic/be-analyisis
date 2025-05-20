import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersCreateWithoutFilesInputSchema } from './promo_bannersCreateWithoutFilesInputSchema';
import { promo_bannersUncheckedCreateWithoutFilesInputSchema } from './promo_bannersUncheckedCreateWithoutFilesInputSchema';
import { promo_bannersCreateOrConnectWithoutFilesInputSchema } from './promo_bannersCreateOrConnectWithoutFilesInputSchema';
import { promo_bannersUpsertWithWhereUniqueWithoutFilesInputSchema } from './promo_bannersUpsertWithWhereUniqueWithoutFilesInputSchema';
import { promo_bannersCreateManyFilesInputEnvelopeSchema } from './promo_bannersCreateManyFilesInputEnvelopeSchema';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';
import { promo_bannersUpdateWithWhereUniqueWithoutFilesInputSchema } from './promo_bannersUpdateWithWhereUniqueWithoutFilesInputSchema';
import { promo_bannersUpdateManyWithWhereWithoutFilesInputSchema } from './promo_bannersUpdateManyWithWhereWithoutFilesInputSchema';
import { promo_bannersScalarWhereInputSchema } from './promo_bannersScalarWhereInputSchema';

export const promo_bannersUncheckedUpdateManyWithoutFilesNestedInputSchema: z.ZodType<Prisma.promo_bannersUncheckedUpdateManyWithoutFilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => promo_bannersCreateWithoutFilesInputSchema),z.lazy(() => promo_bannersCreateWithoutFilesInputSchema).array(),z.lazy(() => promo_bannersUncheckedCreateWithoutFilesInputSchema),z.lazy(() => promo_bannersUncheckedCreateWithoutFilesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => promo_bannersCreateOrConnectWithoutFilesInputSchema),z.lazy(() => promo_bannersCreateOrConnectWithoutFilesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => promo_bannersUpsertWithWhereUniqueWithoutFilesInputSchema),z.lazy(() => promo_bannersUpsertWithWhereUniqueWithoutFilesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => promo_bannersCreateManyFilesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => promo_bannersWhereUniqueInputSchema),z.lazy(() => promo_bannersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => promo_bannersWhereUniqueInputSchema),z.lazy(() => promo_bannersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => promo_bannersWhereUniqueInputSchema),z.lazy(() => promo_bannersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => promo_bannersWhereUniqueInputSchema),z.lazy(() => promo_bannersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => promo_bannersUpdateWithWhereUniqueWithoutFilesInputSchema),z.lazy(() => promo_bannersUpdateWithWhereUniqueWithoutFilesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => promo_bannersUpdateManyWithWhereWithoutFilesInputSchema),z.lazy(() => promo_bannersUpdateManyWithWhereWithoutFilesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => promo_bannersScalarWhereInputSchema),z.lazy(() => promo_bannersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default promo_bannersUncheckedUpdateManyWithoutFilesNestedInputSchema;
