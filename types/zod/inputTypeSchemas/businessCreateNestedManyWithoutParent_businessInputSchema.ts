import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutParent_businessInputSchema } from './businessCreateWithoutParent_businessInputSchema';
import { businessUncheckedCreateWithoutParent_businessInputSchema } from './businessUncheckedCreateWithoutParent_businessInputSchema';
import { businessCreateOrConnectWithoutParent_businessInputSchema } from './businessCreateOrConnectWithoutParent_businessInputSchema';
import { businessCreateManyParent_businessInputEnvelopeSchema } from './businessCreateManyParent_businessInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedManyWithoutParent_businessInputSchema: z.ZodType<Prisma.businessCreateNestedManyWithoutParent_businessInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutParent_businessInputSchema),z.lazy(() => businessCreateWithoutParent_businessInputSchema).array(),z.lazy(() => businessUncheckedCreateWithoutParent_businessInputSchema),z.lazy(() => businessUncheckedCreateWithoutParent_businessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => businessCreateOrConnectWithoutParent_businessInputSchema),z.lazy(() => businessCreateOrConnectWithoutParent_businessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => businessCreateManyParent_businessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default businessCreateNestedManyWithoutParent_businessInputSchema;
