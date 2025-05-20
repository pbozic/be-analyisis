import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutFilesInputSchema } from './documentsCreateWithoutFilesInputSchema';
import { documentsUncheckedCreateWithoutFilesInputSchema } from './documentsUncheckedCreateWithoutFilesInputSchema';
import { documentsCreateOrConnectWithoutFilesInputSchema } from './documentsCreateOrConnectWithoutFilesInputSchema';
import { documentsUpsertWithoutFilesInputSchema } from './documentsUpsertWithoutFilesInputSchema';
import { documentsWhereInputSchema } from './documentsWhereInputSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateToOneWithWhereWithoutFilesInputSchema } from './documentsUpdateToOneWithWhereWithoutFilesInputSchema';
import { documentsUpdateWithoutFilesInputSchema } from './documentsUpdateWithoutFilesInputSchema';
import { documentsUncheckedUpdateWithoutFilesInputSchema } from './documentsUncheckedUpdateWithoutFilesInputSchema';

export const documentsUpdateOneWithoutFilesNestedInputSchema: z.ZodType<Prisma.documentsUpdateOneWithoutFilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => documentsCreateWithoutFilesInputSchema),z.lazy(() => documentsUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => documentsCreateOrConnectWithoutFilesInputSchema).optional(),
  upsert: z.lazy(() => documentsUpsertWithoutFilesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => documentsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => documentsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => documentsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => documentsUpdateToOneWithWhereWithoutFilesInputSchema),z.lazy(() => documentsUpdateWithoutFilesInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutFilesInputSchema) ]).optional(),
}).strict();

export default documentsUpdateOneWithoutFilesNestedInputSchema;
