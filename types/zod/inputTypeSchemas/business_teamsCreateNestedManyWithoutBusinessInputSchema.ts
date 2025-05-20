import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsCreateWithoutBusinessInputSchema } from './business_teamsCreateWithoutBusinessInputSchema';
import { business_teamsUncheckedCreateWithoutBusinessInputSchema } from './business_teamsUncheckedCreateWithoutBusinessInputSchema';
import { business_teamsCreateOrConnectWithoutBusinessInputSchema } from './business_teamsCreateOrConnectWithoutBusinessInputSchema';
import { business_teamsCreateManyBusinessInputEnvelopeSchema } from './business_teamsCreateManyBusinessInputEnvelopeSchema';
import { business_teamsWhereUniqueInputSchema } from './business_teamsWhereUniqueInputSchema';

export const business_teamsCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.business_teamsCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => business_teamsCreateWithoutBusinessInputSchema),z.lazy(() => business_teamsCreateWithoutBusinessInputSchema).array(),z.lazy(() => business_teamsUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => business_teamsUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => business_teamsCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => business_teamsCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => business_teamsCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => business_teamsWhereUniqueInputSchema),z.lazy(() => business_teamsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default business_teamsCreateNestedManyWithoutBusinessInputSchema;
