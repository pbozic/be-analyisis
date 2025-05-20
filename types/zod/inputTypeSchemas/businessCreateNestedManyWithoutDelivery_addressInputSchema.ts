import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDelivery_addressInputSchema } from './businessCreateWithoutDelivery_addressInputSchema';
import { businessUncheckedCreateWithoutDelivery_addressInputSchema } from './businessUncheckedCreateWithoutDelivery_addressInputSchema';
import { businessCreateOrConnectWithoutDelivery_addressInputSchema } from './businessCreateOrConnectWithoutDelivery_addressInputSchema';
import { businessCreateManyDelivery_addressInputEnvelopeSchema } from './businessCreateManyDelivery_addressInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedManyWithoutDelivery_addressInputSchema: z.ZodType<Prisma.businessCreateNestedManyWithoutDelivery_addressInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutDelivery_addressInputSchema),z.lazy(() => businessCreateWithoutDelivery_addressInputSchema).array(),z.lazy(() => businessUncheckedCreateWithoutDelivery_addressInputSchema),z.lazy(() => businessUncheckedCreateWithoutDelivery_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => businessCreateOrConnectWithoutDelivery_addressInputSchema),z.lazy(() => businessCreateOrConnectWithoutDelivery_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => businessCreateManyDelivery_addressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default businessCreateNestedManyWithoutDelivery_addressInputSchema;
