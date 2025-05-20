import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutMenu_itemsInputSchema } from './documentsCreateWithoutMenu_itemsInputSchema';
import { documentsUncheckedCreateWithoutMenu_itemsInputSchema } from './documentsUncheckedCreateWithoutMenu_itemsInputSchema';

export const documentsCreateOrConnectWithoutMenu_itemsInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutMenu_itemsInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => documentsCreateWithoutMenu_itemsInputSchema),z.lazy(() => documentsUncheckedCreateWithoutMenu_itemsInputSchema) ]),
}).strict();

export default documentsCreateOrConnectWithoutMenu_itemsInputSchema;
