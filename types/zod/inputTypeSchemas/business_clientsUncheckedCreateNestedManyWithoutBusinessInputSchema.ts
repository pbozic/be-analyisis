import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsCreateWithoutBusinessInputSchema } from './business_clientsCreateWithoutBusinessInputSchema';
import { business_clientsUncheckedCreateWithoutBusinessInputSchema } from './business_clientsUncheckedCreateWithoutBusinessInputSchema';
import { business_clientsCreateOrConnectWithoutBusinessInputSchema } from './business_clientsCreateOrConnectWithoutBusinessInputSchema';
import { business_clientsCreateManyBusinessInputEnvelopeSchema } from './business_clientsCreateManyBusinessInputEnvelopeSchema';
import { business_clientsWhereUniqueInputSchema } from './business_clientsWhereUniqueInputSchema';

export const business_clientsUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.business_clientsUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => business_clientsCreateWithoutBusinessInputSchema),z.lazy(() => business_clientsCreateWithoutBusinessInputSchema).array(),z.lazy(() => business_clientsUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => business_clientsUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => business_clientsCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => business_clientsCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => business_clientsCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => business_clientsWhereUniqueInputSchema),z.lazy(() => business_clientsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default business_clientsUncheckedCreateNestedManyWithoutBusinessInputSchema;
