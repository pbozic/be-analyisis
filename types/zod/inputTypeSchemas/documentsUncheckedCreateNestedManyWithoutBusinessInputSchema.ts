import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutBusinessInputSchema } from './documentsCreateWithoutBusinessInputSchema';
import { documentsUncheckedCreateWithoutBusinessInputSchema } from './documentsUncheckedCreateWithoutBusinessInputSchema';
import { documentsCreateOrConnectWithoutBusinessInputSchema } from './documentsCreateOrConnectWithoutBusinessInputSchema';
import { documentsCreateManyBusinessInputEnvelopeSchema } from './documentsCreateManyBusinessInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.documentsUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => documentsCreateWithoutBusinessInputSchema),z.lazy(() => documentsCreateWithoutBusinessInputSchema).array(),z.lazy(() => documentsUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => documentsUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => documentsCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => documentsCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => documentsCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default documentsUncheckedCreateNestedManyWithoutBusinessInputSchema;
