import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutDriversInputSchema } from './documentsCreateWithoutDriversInputSchema';
import { documentsUncheckedCreateWithoutDriversInputSchema } from './documentsUncheckedCreateWithoutDriversInputSchema';
import { documentsCreateOrConnectWithoutDriversInputSchema } from './documentsCreateOrConnectWithoutDriversInputSchema';
import { documentsCreateManyDriversInputEnvelopeSchema } from './documentsCreateManyDriversInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsUncheckedCreateNestedManyWithoutDriversInputSchema: z.ZodType<Prisma.documentsUncheckedCreateNestedManyWithoutDriversInput> = z.object({
  create: z.union([ z.lazy(() => documentsCreateWithoutDriversInputSchema),z.lazy(() => documentsCreateWithoutDriversInputSchema).array(),z.lazy(() => documentsUncheckedCreateWithoutDriversInputSchema),z.lazy(() => documentsUncheckedCreateWithoutDriversInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => documentsCreateOrConnectWithoutDriversInputSchema),z.lazy(() => documentsCreateOrConnectWithoutDriversInputSchema).array() ]).optional(),
  createMany: z.lazy(() => documentsCreateManyDriversInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default documentsUncheckedCreateNestedManyWithoutDriversInputSchema;
