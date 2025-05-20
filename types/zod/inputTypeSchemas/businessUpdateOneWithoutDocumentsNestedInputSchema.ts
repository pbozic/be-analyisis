import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDocumentsInputSchema } from './businessCreateWithoutDocumentsInputSchema';
import { businessUncheckedCreateWithoutDocumentsInputSchema } from './businessUncheckedCreateWithoutDocumentsInputSchema';
import { businessCreateOrConnectWithoutDocumentsInputSchema } from './businessCreateOrConnectWithoutDocumentsInputSchema';
import { businessUpsertWithoutDocumentsInputSchema } from './businessUpsertWithoutDocumentsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutDocumentsInputSchema } from './businessUpdateToOneWithWhereWithoutDocumentsInputSchema';
import { businessUpdateWithoutDocumentsInputSchema } from './businessUpdateWithoutDocumentsInputSchema';
import { businessUncheckedUpdateWithoutDocumentsInputSchema } from './businessUncheckedUpdateWithoutDocumentsInputSchema';

export const businessUpdateOneWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutDocumentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutDocumentsInputSchema),z.lazy(() => businessUncheckedCreateWithoutDocumentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutDocumentsInputSchema).optional(),
  upsert: z.lazy(() => businessUpsertWithoutDocumentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => businessWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => businessWhereInputSchema) ]).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => businessUpdateToOneWithWhereWithoutDocumentsInputSchema),z.lazy(() => businessUpdateWithoutDocumentsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutDocumentsInputSchema) ]).optional(),
}).strict();

export default businessUpdateOneWithoutDocumentsNestedInputSchema;
