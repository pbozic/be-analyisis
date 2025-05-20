import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusCreateWithoutBusinessInputSchema } from './menusCreateWithoutBusinessInputSchema';
import { menusUncheckedCreateWithoutBusinessInputSchema } from './menusUncheckedCreateWithoutBusinessInputSchema';
import { menusCreateOrConnectWithoutBusinessInputSchema } from './menusCreateOrConnectWithoutBusinessInputSchema';
import { menusCreateManyBusinessInputEnvelopeSchema } from './menusCreateManyBusinessInputEnvelopeSchema';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';

export const menusCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.menusCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => menusCreateWithoutBusinessInputSchema),z.lazy(() => menusCreateWithoutBusinessInputSchema).array(),z.lazy(() => menusUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => menusUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => menusCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => menusCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => menusCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => menusWhereUniqueInputSchema),z.lazy(() => menusWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default menusCreateNestedManyWithoutBusinessInputSchema;
