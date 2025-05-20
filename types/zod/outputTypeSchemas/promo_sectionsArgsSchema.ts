import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsSelectSchema } from '../inputTypeSchemas/promo_sectionsSelectSchema';
import { promo_sectionsIncludeSchema } from '../inputTypeSchemas/promo_sectionsIncludeSchema';

export const promo_sectionsArgsSchema: z.ZodType<Prisma.promo_sectionsDefaultArgs> = z.object({
  select: z.lazy(() => promo_sectionsSelectSchema).optional(),
  include: z.lazy(() => promo_sectionsIncludeSchema).optional(),
}).strict();

export default promo_sectionsArgsSchema;
