import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsUpdateWithoutFilesInputSchema } from './documentsUpdateWithoutFilesInputSchema';
import { documentsUncheckedUpdateWithoutFilesInputSchema } from './documentsUncheckedUpdateWithoutFilesInputSchema';
import { documentsCreateWithoutFilesInputSchema } from './documentsCreateWithoutFilesInputSchema';
import { documentsUncheckedCreateWithoutFilesInputSchema } from './documentsUncheckedCreateWithoutFilesInputSchema';
import { documentsWhereInputSchema } from './documentsWhereInputSchema';

export const documentsUpsertWithoutFilesInputSchema: z.ZodType<Prisma.documentsUpsertWithoutFilesInput> = z.object({
  update: z.union([ z.lazy(() => documentsUpdateWithoutFilesInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutFilesInputSchema) ]),
  create: z.union([ z.lazy(() => documentsCreateWithoutFilesInputSchema),z.lazy(() => documentsUncheckedCreateWithoutFilesInputSchema) ]),
  where: z.lazy(() => documentsWhereInputSchema).optional()
}).strict();

export default documentsUpsertWithoutFilesInputSchema;
