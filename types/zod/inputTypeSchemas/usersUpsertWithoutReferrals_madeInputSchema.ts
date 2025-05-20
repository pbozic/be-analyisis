import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutReferrals_madeInputSchema } from './usersUpdateWithoutReferrals_madeInputSchema';
import { usersUncheckedUpdateWithoutReferrals_madeInputSchema } from './usersUncheckedUpdateWithoutReferrals_madeInputSchema';
import { usersCreateWithoutReferrals_madeInputSchema } from './usersCreateWithoutReferrals_madeInputSchema';
import { usersUncheckedCreateWithoutReferrals_madeInputSchema } from './usersUncheckedCreateWithoutReferrals_madeInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutReferrals_madeInputSchema: z.ZodType<Prisma.usersUpsertWithoutReferrals_madeInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutReferrals_madeInputSchema),z.lazy(() => usersUncheckedUpdateWithoutReferrals_madeInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutReferrals_madeInputSchema),z.lazy(() => usersUncheckedCreateWithoutReferrals_madeInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutReferrals_madeInputSchema;
