import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';
import { user_addressUpdateWithoutAddressInputSchema } from './user_addressUpdateWithoutAddressInputSchema';
import { user_addressUncheckedUpdateWithoutAddressInputSchema } from './user_addressUncheckedUpdateWithoutAddressInputSchema';
import { user_addressCreateWithoutAddressInputSchema } from './user_addressCreateWithoutAddressInputSchema';
import { user_addressUncheckedCreateWithoutAddressInputSchema } from './user_addressUncheckedCreateWithoutAddressInputSchema';

export const user_addressUpsertWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.user_addressUpsertWithWhereUniqueWithoutAddressInput> = z.object({
  where: z.lazy(() => user_addressWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => user_addressUpdateWithoutAddressInputSchema),z.lazy(() => user_addressUncheckedUpdateWithoutAddressInputSchema) ]),
  create: z.union([ z.lazy(() => user_addressCreateWithoutAddressInputSchema),z.lazy(() => user_addressUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export default user_addressUpsertWithWhereUniqueWithoutAddressInputSchema;
