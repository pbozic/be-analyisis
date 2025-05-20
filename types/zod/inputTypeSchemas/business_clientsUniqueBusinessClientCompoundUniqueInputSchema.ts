import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const business_clientsUniqueBusinessClientCompoundUniqueInputSchema: z.ZodType<Prisma.business_clientsUniqueBusinessClientCompoundUniqueInput> = z.object({
  telephone: z.string(),
  business_id: z.string()
}).strict();

export default business_clientsUniqueBusinessClientCompoundUniqueInputSchema;
