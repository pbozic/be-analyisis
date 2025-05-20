import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_addressUncheckedCreateWithoutAddressInputSchema: z.ZodType<Prisma.user_addressUncheckedCreateWithoutAddressInput> = z.object({
  user_id: z.string(),
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  primary: z.boolean().optional()
}).strict();

export default user_addressUncheckedCreateWithoutAddressInputSchema;
