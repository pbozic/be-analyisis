import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_addressUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.user_addressUncheckedCreateWithoutUsersInput> = z.object({
  address_id: z.string(),
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  primary: z.boolean().optional()
}).strict();

export default user_addressUncheckedCreateWithoutUsersInputSchema;
