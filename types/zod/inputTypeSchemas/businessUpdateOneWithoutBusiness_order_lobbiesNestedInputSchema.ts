import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutBusiness_order_lobbiesInputSchema } from './businessCreateWithoutBusiness_order_lobbiesInputSchema';
import { businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema } from './businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema';
import { businessCreateOrConnectWithoutBusiness_order_lobbiesInputSchema } from './businessCreateOrConnectWithoutBusiness_order_lobbiesInputSchema';
import { businessUpsertWithoutBusiness_order_lobbiesInputSchema } from './businessUpsertWithoutBusiness_order_lobbiesInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutBusiness_order_lobbiesInputSchema } from './businessUpdateToOneWithWhereWithoutBusiness_order_lobbiesInputSchema';
import { businessUpdateWithoutBusiness_order_lobbiesInputSchema } from './businessUpdateWithoutBusiness_order_lobbiesInputSchema';
import { businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema } from './businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema';

export const businessUpdateOneWithoutBusiness_order_lobbiesNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutBusiness_order_lobbiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_order_lobbiesInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutBusiness_order_lobbiesInputSchema).optional(),
  upsert: z.lazy(() => businessUpsertWithoutBusiness_order_lobbiesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => businessWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => businessWhereInputSchema) ]).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => businessUpdateToOneWithWhereWithoutBusiness_order_lobbiesInputSchema),z.lazy(() => businessUpdateWithoutBusiness_order_lobbiesInputSchema),z.lazy(() => businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema) ]).optional(),
}).strict();

export default businessUpdateOneWithoutBusiness_order_lobbiesNestedInputSchema;
