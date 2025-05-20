import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReferrals_madeInputSchema } from './usersCreateWithoutReferrals_madeInputSchema';
import { usersUncheckedCreateWithoutReferrals_madeInputSchema } from './usersUncheckedCreateWithoutReferrals_madeInputSchema';
import { usersCreateOrConnectWithoutReferrals_madeInputSchema } from './usersCreateOrConnectWithoutReferrals_madeInputSchema';
import { usersUpsertWithoutReferrals_madeInputSchema } from './usersUpsertWithoutReferrals_madeInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutReferrals_madeInputSchema } from './usersUpdateToOneWithWhereWithoutReferrals_madeInputSchema';
import { usersUpdateWithoutReferrals_madeInputSchema } from './usersUpdateWithoutReferrals_madeInputSchema';
import { usersUncheckedUpdateWithoutReferrals_madeInputSchema } from './usersUncheckedUpdateWithoutReferrals_madeInputSchema';

export const usersUpdateOneRequiredWithoutReferrals_madeNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutReferrals_madeNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutReferrals_madeInputSchema),z.lazy(() => usersUncheckedCreateWithoutReferrals_madeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutReferrals_madeInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutReferrals_madeInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutReferrals_madeInputSchema),z.lazy(() => usersUpdateWithoutReferrals_madeInputSchema),z.lazy(() => usersUncheckedUpdateWithoutReferrals_madeInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutReferrals_madeNestedInputSchema;
