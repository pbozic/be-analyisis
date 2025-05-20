import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutAccount_actionsInputSchema } from './businessCreateWithoutAccount_actionsInputSchema';
import { businessUncheckedCreateWithoutAccount_actionsInputSchema } from './businessUncheckedCreateWithoutAccount_actionsInputSchema';

export const businessCreateOrConnectWithoutAccount_actionsInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutAccount_actionsInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutAccount_actionsInputSchema),z.lazy(() => businessUncheckedCreateWithoutAccount_actionsInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutAccount_actionsInputSchema;
