import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutTransactionsInputSchema } from './documentsCreateWithoutTransactionsInputSchema';
import { documentsUncheckedCreateWithoutTransactionsInputSchema } from './documentsUncheckedCreateWithoutTransactionsInputSchema';
import { documentsCreateOrConnectWithoutTransactionsInputSchema } from './documentsCreateOrConnectWithoutTransactionsInputSchema';
import { documentsCreateManyTransactionsInputEnvelopeSchema } from './documentsCreateManyTransactionsInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsUncheckedCreateNestedManyWithoutTransactionsInputSchema: z.ZodType<Prisma.documentsUncheckedCreateNestedManyWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => documentsCreateWithoutTransactionsInputSchema),z.lazy(() => documentsCreateWithoutTransactionsInputSchema).array(),z.lazy(() => documentsUncheckedCreateWithoutTransactionsInputSchema),z.lazy(() => documentsUncheckedCreateWithoutTransactionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => documentsCreateOrConnectWithoutTransactionsInputSchema),z.lazy(() => documentsCreateOrConnectWithoutTransactionsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => documentsCreateManyTransactionsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default documentsUncheckedCreateNestedManyWithoutTransactionsInputSchema;
