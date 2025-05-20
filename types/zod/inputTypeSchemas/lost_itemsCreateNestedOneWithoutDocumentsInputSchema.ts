import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsCreateWithoutDocumentsInputSchema } from './lost_itemsCreateWithoutDocumentsInputSchema';
import { lost_itemsUncheckedCreateWithoutDocumentsInputSchema } from './lost_itemsUncheckedCreateWithoutDocumentsInputSchema';
import { lost_itemsCreateOrConnectWithoutDocumentsInputSchema } from './lost_itemsCreateOrConnectWithoutDocumentsInputSchema';
import { lost_itemsWhereUniqueInputSchema } from './lost_itemsWhereUniqueInputSchema';

export const lost_itemsCreateNestedOneWithoutDocumentsInputSchema: z.ZodType<Prisma.lost_itemsCreateNestedOneWithoutDocumentsInput> = z.object({
  create: z.union([ z.lazy(() => lost_itemsCreateWithoutDocumentsInputSchema),z.lazy(() => lost_itemsUncheckedCreateWithoutDocumentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => lost_itemsCreateOrConnectWithoutDocumentsInputSchema).optional(),
  connect: z.lazy(() => lost_itemsWhereUniqueInputSchema).optional()
}).strict();

export default lost_itemsCreateNestedOneWithoutDocumentsInputSchema;
