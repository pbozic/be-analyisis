import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutBusiness_clientsInputSchema } from './businessCreateWithoutBusiness_clientsInputSchema';
import { businessUncheckedCreateWithoutBusiness_clientsInputSchema } from './businessUncheckedCreateWithoutBusiness_clientsInputSchema';
import { businessCreateOrConnectWithoutBusiness_clientsInputSchema } from './businessCreateOrConnectWithoutBusiness_clientsInputSchema';
import { businessUpsertWithoutBusiness_clientsInputSchema } from './businessUpsertWithoutBusiness_clientsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutBusiness_clientsInputSchema } from './businessUpdateToOneWithWhereWithoutBusiness_clientsInputSchema';
import { businessUpdateWithoutBusiness_clientsInputSchema } from './businessUpdateWithoutBusiness_clientsInputSchema';
import { businessUncheckedUpdateWithoutBusiness_clientsInputSchema } from './businessUncheckedUpdateWithoutBusiness_clientsInputSchema';

export const businessUpdateOneWithoutBusiness_clientsNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutBusiness_clientsNestedInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_clientsInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_clientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutBusiness_clientsInputSchema).optional(),
  upsert: z.lazy(() => businessUpsertWithoutBusiness_clientsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => businessWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => businessWhereInputSchema) ]).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => businessUpdateToOneWithWhereWithoutBusiness_clientsInputSchema),z.lazy(() => businessUpdateWithoutBusiness_clientsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutBusiness_clientsInputSchema) ]).optional(),
}).strict();

export default businessUpdateOneWithoutBusiness_clientsNestedInputSchema;
