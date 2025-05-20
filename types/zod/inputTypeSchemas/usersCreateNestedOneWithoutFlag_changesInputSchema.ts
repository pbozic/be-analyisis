import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutFlag_changesInputSchema } from './usersCreateWithoutFlag_changesInputSchema';
import { usersUncheckedCreateWithoutFlag_changesInputSchema } from './usersUncheckedCreateWithoutFlag_changesInputSchema';
import { usersCreateOrConnectWithoutFlag_changesInputSchema } from './usersCreateOrConnectWithoutFlag_changesInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutFlag_changesInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutFlag_changesInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutFlag_changesInputSchema),z.lazy(() => usersUncheckedCreateWithoutFlag_changesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutFlag_changesInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutFlag_changesInputSchema;
