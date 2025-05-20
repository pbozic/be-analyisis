import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReferrals_madeInputSchema } from './usersCreateWithoutReferrals_madeInputSchema';
import { usersUncheckedCreateWithoutReferrals_madeInputSchema } from './usersUncheckedCreateWithoutReferrals_madeInputSchema';
import { usersCreateOrConnectWithoutReferrals_madeInputSchema } from './usersCreateOrConnectWithoutReferrals_madeInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutReferrals_madeInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutReferrals_madeInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutReferrals_madeInputSchema),z.lazy(() => usersUncheckedCreateWithoutReferrals_madeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutReferrals_madeInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutReferrals_madeInputSchema;
