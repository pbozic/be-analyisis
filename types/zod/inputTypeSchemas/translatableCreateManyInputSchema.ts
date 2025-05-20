import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const translatableCreateManyInputSchema: z.ZodType<Prisma.translatableCreateManyInput> = z.object({
  translatable_id: z.string().uuid().optional()
}).strict();

export default translatableCreateManyInputSchema;
