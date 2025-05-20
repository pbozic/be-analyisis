import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutDocumentsInputSchema } from './transactionsCreateWithoutDocumentsInputSchema';
import { transactionsUncheckedCreateWithoutDocumentsInputSchema } from './transactionsUncheckedCreateWithoutDocumentsInputSchema';
import { transactionsCreateOrConnectWithoutDocumentsInputSchema } from './transactionsCreateOrConnectWithoutDocumentsInputSchema';
import { transactionsUpsertWithoutDocumentsInputSchema } from './transactionsUpsertWithoutDocumentsInputSchema';
import { transactionsWhereInputSchema } from './transactionsWhereInputSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateToOneWithWhereWithoutDocumentsInputSchema } from './transactionsUpdateToOneWithWhereWithoutDocumentsInputSchema';
import { transactionsUpdateWithoutDocumentsInputSchema } from './transactionsUpdateWithoutDocumentsInputSchema';
import { transactionsUncheckedUpdateWithoutDocumentsInputSchema } from './transactionsUncheckedUpdateWithoutDocumentsInputSchema';

export const transactionsUpdateOneWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.transactionsUpdateOneWithoutDocumentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => transactionsCreateWithoutDocumentsInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutDocumentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => transactionsCreateOrConnectWithoutDocumentsInputSchema).optional(),
  upsert: z.lazy(() => transactionsUpsertWithoutDocumentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => transactionsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => transactionsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => transactionsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => transactionsUpdateToOneWithWhereWithoutDocumentsInputSchema),z.lazy(() => transactionsUpdateWithoutDocumentsInputSchema),z.lazy(() => transactionsUncheckedUpdateWithoutDocumentsInputSchema) ]).optional(),
}).strict();

export default transactionsUpdateOneWithoutDocumentsNestedInputSchema;
