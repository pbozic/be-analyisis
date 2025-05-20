import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_addressUser_idAddress_idCompoundUniqueInputSchema: z.ZodType<Prisma.user_addressUser_idAddress_idCompoundUniqueInput> = z.object({
  user_id: z.string(),
  address_id: z.string()
}).strict();

export default user_addressUser_idAddress_idCompoundUniqueInputSchema;
