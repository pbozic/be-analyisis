import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateWithoutUserInputSchema } from './cashbackCreateWithoutUserInputSchema';
import { cashbackUncheckedCreateWithoutUserInputSchema } from './cashbackUncheckedCreateWithoutUserInputSchema';
import { cashbackCreateOrConnectWithoutUserInputSchema } from './cashbackCreateOrConnectWithoutUserInputSchema';
import { cashbackCreateManyUserInputEnvelopeSchema } from './cashbackCreateManyUserInputEnvelopeSchema';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';

export const cashbackUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.cashbackUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => cashbackCreateWithoutUserInputSchema),z.lazy(() => cashbackCreateWithoutUserInputSchema).array(),z.lazy(() => cashbackUncheckedCreateWithoutUserInputSchema),z.lazy(() => cashbackUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cashbackCreateOrConnectWithoutUserInputSchema),z.lazy(() => cashbackCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cashbackCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default cashbackUncheckedCreateNestedManyWithoutUserInputSchema;
