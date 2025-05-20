import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateWithoutDocumentsInputSchema } from './filesCreateWithoutDocumentsInputSchema';
import { filesUncheckedCreateWithoutDocumentsInputSchema } from './filesUncheckedCreateWithoutDocumentsInputSchema';
import { filesCreateOrConnectWithoutDocumentsInputSchema } from './filesCreateOrConnectWithoutDocumentsInputSchema';
import { filesUpsertWithWhereUniqueWithoutDocumentsInputSchema } from './filesUpsertWithWhereUniqueWithoutDocumentsInputSchema';
import { filesCreateManyDocumentsInputEnvelopeSchema } from './filesCreateManyDocumentsInputEnvelopeSchema';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';
import { filesUpdateWithWhereUniqueWithoutDocumentsInputSchema } from './filesUpdateWithWhereUniqueWithoutDocumentsInputSchema';
import { filesUpdateManyWithWhereWithoutDocumentsInputSchema } from './filesUpdateManyWithWhereWithoutDocumentsInputSchema';
import { filesScalarWhereInputSchema } from './filesScalarWhereInputSchema';

export const filesUncheckedUpdateManyWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.filesUncheckedUpdateManyWithoutDocumentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => filesCreateWithoutDocumentsInputSchema),z.lazy(() => filesCreateWithoutDocumentsInputSchema).array(),z.lazy(() => filesUncheckedCreateWithoutDocumentsInputSchema),z.lazy(() => filesUncheckedCreateWithoutDocumentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => filesCreateOrConnectWithoutDocumentsInputSchema),z.lazy(() => filesCreateOrConnectWithoutDocumentsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => filesUpsertWithWhereUniqueWithoutDocumentsInputSchema),z.lazy(() => filesUpsertWithWhereUniqueWithoutDocumentsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => filesCreateManyDocumentsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => filesWhereUniqueInputSchema),z.lazy(() => filesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => filesWhereUniqueInputSchema),z.lazy(() => filesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => filesWhereUniqueInputSchema),z.lazy(() => filesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => filesWhereUniqueInputSchema),z.lazy(() => filesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => filesUpdateWithWhereUniqueWithoutDocumentsInputSchema),z.lazy(() => filesUpdateWithWhereUniqueWithoutDocumentsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => filesUpdateManyWithWhereWithoutDocumentsInputSchema),z.lazy(() => filesUpdateManyWithWhereWithoutDocumentsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => filesScalarWhereInputSchema),z.lazy(() => filesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default filesUncheckedUpdateManyWithoutDocumentsNestedInputSchema;
