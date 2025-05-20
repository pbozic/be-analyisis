import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesCreateWithoutBusinessesInputSchema } from './user_favorite_businessesCreateWithoutBusinessesInputSchema';
import { user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema } from './user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema';
import { user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema } from './user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema';
import { user_favorite_businessesUpsertWithWhereUniqueWithoutBusinessesInputSchema } from './user_favorite_businessesUpsertWithWhereUniqueWithoutBusinessesInputSchema';
import { user_favorite_businessesCreateManyBusinessesInputEnvelopeSchema } from './user_favorite_businessesCreateManyBusinessesInputEnvelopeSchema';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';
import { user_favorite_businessesUpdateWithWhereUniqueWithoutBusinessesInputSchema } from './user_favorite_businessesUpdateWithWhereUniqueWithoutBusinessesInputSchema';
import { user_favorite_businessesUpdateManyWithWhereWithoutBusinessesInputSchema } from './user_favorite_businessesUpdateManyWithWhereWithoutBusinessesInputSchema';
import { user_favorite_businessesScalarWhereInputSchema } from './user_favorite_businessesScalarWhereInputSchema';

export const user_favorite_businessesUpdateManyWithoutBusinessesNestedInputSchema: z.ZodType<Prisma.user_favorite_businessesUpdateManyWithoutBusinessesNestedInput> = z.object({
  create: z.union([ z.lazy(() => user_favorite_businessesCreateWithoutBusinessesInputSchema),z.lazy(() => user_favorite_businessesCreateWithoutBusinessesInputSchema).array(),z.lazy(() => user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema),z.lazy(() => user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema),z.lazy(() => user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => user_favorite_businessesUpsertWithWhereUniqueWithoutBusinessesInputSchema),z.lazy(() => user_favorite_businessesUpsertWithWhereUniqueWithoutBusinessesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => user_favorite_businessesCreateManyBusinessesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => user_favorite_businessesUpdateWithWhereUniqueWithoutBusinessesInputSchema),z.lazy(() => user_favorite_businessesUpdateWithWhereUniqueWithoutBusinessesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => user_favorite_businessesUpdateManyWithWhereWithoutBusinessesInputSchema),z.lazy(() => user_favorite_businessesUpdateManyWithWhereWithoutBusinessesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => user_favorite_businessesScalarWhereInputSchema),z.lazy(() => user_favorite_businessesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default user_favorite_businessesUpdateManyWithoutBusinessesNestedInputSchema;
