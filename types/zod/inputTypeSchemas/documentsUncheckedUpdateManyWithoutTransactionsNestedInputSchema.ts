import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutTransactionsInputSchema } from './documentsCreateWithoutTransactionsInputSchema';
import { documentsUncheckedCreateWithoutTransactionsInputSchema } from './documentsUncheckedCreateWithoutTransactionsInputSchema';
import { documentsCreateOrConnectWithoutTransactionsInputSchema } from './documentsCreateOrConnectWithoutTransactionsInputSchema';
import { documentsUpsertWithWhereUniqueWithoutTransactionsInputSchema } from './documentsUpsertWithWhereUniqueWithoutTransactionsInputSchema';
import { documentsCreateManyTransactionsInputEnvelopeSchema } from './documentsCreateManyTransactionsInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithWhereUniqueWithoutTransactionsInputSchema } from './documentsUpdateWithWhereUniqueWithoutTransactionsInputSchema';
import { documentsUpdateManyWithWhereWithoutTransactionsInputSchema } from './documentsUpdateManyWithWhereWithoutTransactionsInputSchema';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';

export const documentsUncheckedUpdateManyWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.documentsUncheckedUpdateManyWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => documentsCreateWithoutTransactionsInputSchema),z.lazy(() => documentsCreateWithoutTransactionsInputSchema).array(),z.lazy(() => documentsUncheckedCreateWithoutTransactionsInputSchema),z.lazy(() => documentsUncheckedCreateWithoutTransactionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => documentsCreateOrConnectWithoutTransactionsInputSchema),z.lazy(() => documentsCreateOrConnectWithoutTransactionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => documentsUpsertWithWhereUniqueWithoutTransactionsInputSchema),z.lazy(() => documentsUpsertWithWhereUniqueWithoutTransactionsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => documentsCreateManyTransactionsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => documentsUpdateWithWhereUniqueWithoutTransactionsInputSchema),z.lazy(() => documentsUpdateWithWhereUniqueWithoutTransactionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => documentsUpdateManyWithWhereWithoutTransactionsInputSchema),z.lazy(() => documentsUpdateManyWithWhereWithoutTransactionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => documentsScalarWhereInputSchema),z.lazy(() => documentsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default documentsUncheckedUpdateManyWithoutTransactionsNestedInputSchema;
