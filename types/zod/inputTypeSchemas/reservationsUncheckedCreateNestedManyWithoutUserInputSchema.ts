import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsCreateWithoutUserInputSchema } from './reservationsCreateWithoutUserInputSchema';
import { reservationsUncheckedCreateWithoutUserInputSchema } from './reservationsUncheckedCreateWithoutUserInputSchema';
import { reservationsCreateOrConnectWithoutUserInputSchema } from './reservationsCreateOrConnectWithoutUserInputSchema';
import { reservationsCreateManyUserInputEnvelopeSchema } from './reservationsCreateManyUserInputEnvelopeSchema';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';

export const reservationsUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.reservationsUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => reservationsCreateWithoutUserInputSchema),z.lazy(() => reservationsCreateWithoutUserInputSchema).array(),z.lazy(() => reservationsUncheckedCreateWithoutUserInputSchema),z.lazy(() => reservationsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => reservationsCreateOrConnectWithoutUserInputSchema),z.lazy(() => reservationsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => reservationsCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => reservationsWhereUniqueInputSchema),z.lazy(() => reservationsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default reservationsUncheckedCreateNestedManyWithoutUserInputSchema;
