import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesSelectSchema } from '../inputTypeSchemas/financesSelectSchema';
import { financesIncludeSchema } from '../inputTypeSchemas/financesIncludeSchema';

export const financesArgsSchema: z.ZodType<Prisma.financesDefaultArgs> = z.object({
  select: z.lazy(() => financesSelectSchema).optional(),
  include: z.lazy(() => financesIncludeSchema).optional(),
}).strict();

export default financesArgsSchema;
