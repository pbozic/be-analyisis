import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const business_usersUniqueBusinessUserCompoundUniqueInputSchema: z.ZodType<Prisma.business_usersUniqueBusinessUserCompoundUniqueInput> = z.object({
  user_id: z.string(),
  business_id: z.string()
}).strict();

export default business_usersUniqueBusinessUserCompoundUniqueInputSchema;
