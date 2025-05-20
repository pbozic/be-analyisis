import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutLost_itemsInputSchema } from './documentsUpdateWithoutLost_itemsInputSchema';
import { documentsUncheckedUpdateWithoutLost_itemsInputSchema } from './documentsUncheckedUpdateWithoutLost_itemsInputSchema';
import { documentsCreateWithoutLost_itemsInputSchema } from './documentsCreateWithoutLost_itemsInputSchema';
import { documentsUncheckedCreateWithoutLost_itemsInputSchema } from './documentsUncheckedCreateWithoutLost_itemsInputSchema';

export const documentsUpsertWithWhereUniqueWithoutLost_itemsInputSchema: z.ZodType<Prisma.documentsUpsertWithWhereUniqueWithoutLost_itemsInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => documentsUpdateWithoutLost_itemsInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutLost_itemsInputSchema) ]),
  create: z.union([ z.lazy(() => documentsCreateWithoutLost_itemsInputSchema),z.lazy(() => documentsUncheckedCreateWithoutLost_itemsInputSchema) ]),
}).strict();

export default documentsUpsertWithWhereUniqueWithoutLost_itemsInputSchema;
